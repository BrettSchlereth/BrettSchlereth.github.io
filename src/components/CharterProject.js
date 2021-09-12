import React from 'react';
import initSqlJs from 'sql.js';

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

const dataStyle = {
  whiteSpace: 'pre-wrap'
}

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

  //Given one customer's name, this will return the customer's total points
  //earned from all of their transactions
  calculatePoints(name) {
    //Queries the SQLite file for the customer's transactions
    var amounts = this.getQuery("SELECT Amount FROM transactionData WHERE CustomerName='" + name + "'")
    let points = 0
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
    //Returns the customer's total points
    return points
  }

  //Fetches a list of every customer and calculates each of their point totals
  getPoints() {
    //Queries the SQLite file for a list of every customer name
    var namesArr = this.getQuery("SELECT DISTINCT CustomerName FROM transactionData")
    //Creates a dictionary that will hold each customer's name and their total points
    var names = {}
    //Assigns the total points to each name
    for (var i = 0; i < namesArr.length; i++) {
      names[namesArr[i][0]] = this.calculatePoints(namesArr[i][0]);
    }
    //Sets the points state to equal a string with all of the names and points
    this.setState({
      points: this.printData(names)
    })
  }

  //Returns the values of a given SQL query
  getQuery(query) {
    return this.state.database.exec(query)[0]["values"]
  }

  //Disables the button after pressing the button
  isDisabled() {
    if (this.state.points != null) {
      return true
    }
    return false
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

  //Formats the given dictionary into a string format to be printed on screen
  printData(data) {
    if (data != null) {
      var output = ""
      for (const [key, value] of Object.entries(data)) {
        output += String(key) + ": " + String(value) + "\n"
      }
      return output
    }
  }

  render() {
    return(
      <div>
        <p style={dataStyle}>
          {this.state.points}
        </p>
        <button style={buttonStyle[this.isDisabled()]} disabled={this.isDisabled()} onClick={() => this.getPoints()}> Get Points </button>
      </div>)
  }
}

export default CharterProject;
