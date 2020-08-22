const express = require("express"),
    http = require("http"),
    mongoose = require("mongoose"),
    app = express(),
    url = "mongodb+srv://SteinarLogi:Loginn123@rannsokncluster.9li31.mongodb.net/rannsokncluster?retryWrites=true&w=majority";

mongoose.connect(url, {useNewUrlParser:true});

const subjectSchema = mongoose.Schema({
        "name" : String,
        "age" : String,
        "favouriteBand" : String
      }),
      Subject = mongoose.model('Subject', subjectSchema); //thridja argumentið er collection nameið, ef ekkert er gefið þá býr mongoose til collectionname með því að pluralizea model nafni'

//Start server
app.use(express.static(__dirname + "/client"));
app.use(express.urlencoded());

http.createServer(app).listen(3000);

app.post("/sendinformation", function(req, res) {
  var values = req.body.values,
      temp = new Subject({name:values[0], age:values[1], favouriteBand:values[2]});

  temp.save(function(err) {
    if(err !== null) console.log("error");
  });

  console.log(temp.id);

  res.json({"id":"ba"});
});

for(i = 1; i <= 8; i++) {
  app.get("/button" + i, function(req, res) {

    Subject.find({}, function(err, subs) {
      if(err !== null) console.log('error');
      else {
        subs.forEach(function(doc) {
          console.log(doc);
        });
      }
    });

    res.json({"message" : "down: " + req.url});
  });
}

app.post("");
