import React from 'react';
import initSqlJs from 'sql.js';


//https://github.com/BrettSchlereth/CharterHW/blob/main/transactionSQL.sqlite?raw=true

const dataStyle = {
  whiteSpace: 'pre-wrap'
}

var database

class CharterProject extends React.Component {

  constructor(props) {
    super(props);
    this.loadDataset()
    this.state={
      database: null,
      SQLresponse: null,
    }

  }

  calculatePoints(name) {
    var amounts = this.getQuery("SELECT Amount FROM transactionData WHERE CustomerName='" + name + "'")
    console.log("amounts: ", amounts)
    var points = 0
    for (var i = 0; i < amounts.length) {
      var amount = amounts[i][0]
      if (amount > 100) {
        points += 2 * (amounts)
      }
    }
  }

  getPoints() {
    var namesArr = this.getQuery("SELECT DISTINCT CustomerName FROM transactionData")
    var names = {}
    for (var i = 0; i < namesArr.length; i++) {
      console.log("name: ", namesArr[i][0])
      names[namesArr[i][0]] = calculatePoints(namesArr[i][0]);
      //this.calculatePoints(names[i][0])
    }
  }

  getQuery(query) {
    return this.state.database.exec(query)[0]["values"]
  }

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
    catch (err) {
      console.log(err);
      console.log("Failed to load database")
    }
    console.log("db: ", this.state.database)
  }



  //QUERIES
  //"SELECT DISTINCT CustomerName FROM transactionData"

  showSomething() {
    //console.log("response: ", this.state.database.exec("SELECT * FROM transactionData WHERE CustomerName='John'")[0]["values"])
    this.setState({
      SQLresponse: this.getQuery("SELECT Amount FROM transactionData WHERE CustomerName='John'")
    })
    this.getPoints()
  }

  printData(data) {
    if (data != null) {
      var output = ""
      for (var i = 0; i < data.length; i++) {
        output += String(data[i]) + "\n"
      }
      return output
    }
    else return "goodbye"
  }


  // var db = new SQL.Database(new Uint8Array(buf));
  // console.log("db: ", db)
  // return db


    // const db = new SQL.Database(new Uint8Array(buf));

    // this.setState({
    //   database: new SQL.Database(new Uint8Array(buf))
    // })
    // res = db.exec("SELECT * FROM transactionData WHERE TransactionId=4")

    // this.setState({
    //   SQLresponse: db.exec("SELECT * FROM transactionData WHERE TransactionId=4")[0]["values"][0][2]
    // })
//{this.state.database.exec("SELECT * FROM transactionData WHERE TransactionID=4")[0]["values"][0][2]}

  render() {
    return(
      <div>
      <p style={dataStyle}>
        {this.printData(this.state.SQLresponse)}
      </p>
        <button onClick={() => this.showSomething()}> hit me </button>
      </div>)
  }
}

export default CharterProject;
