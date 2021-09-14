//Brett Schlereth
//Charter Homework Project
//9/13/2021

import React from 'react';
import initSqlJs from 'sql.js';
import '../App.css';

const buttonStyle = {
  false: {
    textAlign: 'center',
    height: '10%',
    width: '25%',
    backgroundColor: "white",
    color: "black",
    fontSize: "1.5em",
    borderRadius: '5px',
    border: '1px solid black',
    fontWeight: 'bold',
  },
  true: {
    textAlign: 'center',
    height: '10%',
    width: '25%',
    backgroundColor: "gray",
    color: "black",
    fontSize: "1.5em",
    borderRadius: '5px',
    border: '1px solid black',
    fontWeight: 'bold',
  }
};

const tableStyle = {
  whiteSpace: 'pre-wrap',
  width: '100%'
}

//global variables so user input for the starting month and time span could be used
const STARTINGMONTH = "2021-09"
const NUMOFMONTHS = 3

class CharterProject extends React.Component {
  constructor(props) {
    super(props);
    //Loads the dataset at the starting of the page
    this.loadDataset()
    this.state={
      database: null,
      points: null,
    }
  }

  //Given a date ex."2021-09", adds a month returning a date in the same format ex."2021-10"
  addMonth(date, monthsAdding) {
    //Parses the date into year and month
    var year = parseInt(date.slice(0,4))
    var month = parseInt(date.slice(5)) + 1
    if (month > 12) {
      month = 1
      year += 1
    }
    if (month < 10) { month = "0" + String(month)}
    //Puts the year and month back into the original format
    var date = String(year) + "-" + String(month)
    return date
  }

  //Given one customer's name, this will return the customer's points for each month
  calculatePoints(name) {
    var pointsArr = []
    var month = STARTINGMONTH
    for (var j = 0; j < NUMOFMONTHS; j++) {
      let points = 0
      //Queries the SQLite file for the customer's transactions in a given month
      var amounts = this.getQuery("SELECT Amount FROM transactionData WHERE CustomerName='"
       + name + "'" + " AND strftime('%Y-%m', Date)='" + month + "'")
      //Calculates the points based on the transaction amount
      for (var i = 0; i < amounts.length; i++) {
        var amount = Math.floor(amounts[i][0])
        if (amount > 100) {
          points += 2 * (amount - 100) + 50
        }
        else if (amount > 50) {
          points += (amount - 50)
        }
      }
      month = this.addMonth(month, j)
      //Adds the customer's point total to the array
      pointsArr.push(points)
    }
    //Returns the customer's points
    return pointsArr
  }

  //Gets the header for the top of the table
  getHeader() {
    var header = []
    var date = STARTINGMONTH
    for (var i = 0; i < NUMOFMONTHS; i++) {
      header.push(<td key={date}>{date}</td>)
      date = this.addMonth(date, i)
    }
    return header
  }

  //Fetches a list of every customer and calculates their monthly points
  getPoints() {
    //Queries the SQLite file for a list of every customer name
    var namesArr = this.getQuery("SELECT DISTINCT CustomerName FROM transactionData")
    //Creates a dictionary that will hold each customer's name and their points for each month
    var names = {}
    //Assigns the total points to each name
    for (var i = 0; i < namesArr.length; i++) {
      names[namesArr[i][0]] = this.calculatePoints(namesArr[i][0]);
    }
    //Once all of the data is collected, it is sent to be printed
    this.printData(names)
  }

  //Returns the values of a given SQL query
  getQuery(query) {
    return this.state.database.exec(query)[0]["values"]
  }

  //Gets the point values for each month
  getValues(values) {
    let output = []
    values.forEach(value => output.push(<td key={value}>{value}</td>))
    return output
  }

  //Disables the button after pressing the button
  isDisabled() {
    if (this.state.points != null) { return true } return false
  }

  //Fetches the database from the public files and stores it in the db state value
  async loadDataset () {
    const sqlPromise = initSqlJs({locateFile: file => `sql-wasm.wasm`});
    const dataPromise = fetch("transactionSQL.sqlite").then(res => res.arrayBuffer());
    try {
      const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
        var db = new SQL.Database(new Uint8Array(buf));
        this.setState({
          database: db
        })
    }
    //Throws an error if the database fails to load
    catch (err) {
      console.log(err);
      console.log("Failed to load database")
    }
  }

  //Calculates each customer's total and formats the given data into a table
  printData(data) {
    if (data != null) {
      const reducer = (previousValue, currentValue) => previousValue + currentValue;
      var output = []
      //Creates the header for the table
      output.push(<tr key="tableHeader"><td>{"NAME"}</td>{this.getHeader()}<td>{"TOTAL POINTS"}</td></tr>)
      //Adds the customer's data to the table
      for (const [key, value] of Object.entries(data)) {
        output.push(<tr key={key+"1"}><td>{String(key)}</td>{this.getValues(value)}<td>{String(value.reduce(reducer))}</td></tr>)
      }
      //Updates the points state to be rendered on screen
      this.setState({
        points: output
      })
    }
  }

  render() {
    return(
      <div>
        <table style={tableStyle}>
          <tbody>
            {this.state.points}
          </tbody>
        </table>
        <button style={buttonStyle[this.isDisabled()]} disabled={this.isDisabled()} onClick={() => this.getPoints()}> Get Points </button>
      </div>)
  }
}

export default CharterProject;
