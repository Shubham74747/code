var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

const insertData = (myObj) => {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("college");
      dbo.collection("students").insertOne(myObj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
}

module.exports = {
    insertData
};
