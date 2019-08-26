const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient

var db;

MongoClient.connect('mongodb://127.0.0.1:27017/examen', (err, database) => {

    if (err) return console.log(err)
    db = database.db('examen') 

    app.listen(3000, function() {
        console.log('listening on 3000')
    })

    app.set('view engine', 'ejs')   
    app.use(bodyParser.urlencoded({extended: true}))

    app.get('/', function(req, res){
        res.render('home.ejs')
      });
    
      app.get('/list', function(req, res){
        db.collection('overtredingen').find().toArray((err, result) => {
          if (err) return console.log(err)
          res.render('list.ejs', {overtredingen: result})
        })
      })

      app.post('/searchAantal', (req,res) => {
    
        db.collection('overtredingen').find({aantal_overtredingen_snelheid: {$gte: parseInt(req.body.aantal)}}).toArray(function(err, result) {
            if (err) return console.log(err)
            res.render('search.ejs', { overtredingen: result})
        })
    })

      app.post('/search', (req,res) => {
        db.collection('overtredingen').find({opnameplaats_straat: req.body.straat}).toArray(function(err, result) {
            if (err) return console.log(err)
            res.render('search.ejs', { overtredingen: result})
        })
    })

      app.get('/search', function(req, res){
        db.collection('overtredingen').find().toArray((err, result) => {
        result = [];
          if (err) return console.log(err)
          res.render('search.ejs', {overtredingen: result})
        })
      })
})