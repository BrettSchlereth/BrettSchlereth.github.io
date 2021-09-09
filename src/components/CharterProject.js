import React from 'react';
import initSqlJs from 'sql.js';


//https://github.com/BrettSchlereth/CharterHW/blob/main/transactionSQL.sqlite?raw=true

class CharterProject extends React.Component {

  constructor(props) {
    super(props);
    this.loadDataset()
  }

  async loadDataset () {
    const sqlPromise = initSqlJs({locateFile: file => `sql-wasm.wasm`});
    const dataPromise = fetch("transactionSQL.sqlite").then(res => res.arrayBuffer());
    const [SQL, buf] = await Promise.all([sqlPromise, dataPromise])
    const db = new SQL.Database(new Uint8Array(buf));
    console.log("db: ", db)
    const res = db.exec("SELECT * FROM transactionData WHERE TransactionId=4")
    // const res = db.exec(".scheme tablename")
    console.log("res: ", res)
  }


  render() {
    return(
      <div>
        returned from script again
      </div>)
  }
}

export default CharterProject;
