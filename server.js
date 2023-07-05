const express = require('express');
const app = express();
const port = 8000;
const host = 'localhost';
const path = require('path');
const fs = require('fs');
const {SerialPort} = require('serialport');
const arduino = "COM3";
let counter = 0;

var serialPort = new SerialPort({
    path:arduino,
    baudRate:9600
})

serialPort.on('open',function()
{
    console.log("Serial Port: " + arduino);
});

app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname+"/public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/:buzz",(req,res)=>{
    var sendShit = req.params.buzz || req.params('buzz');

    if (sendShit == "ONSHIT")
    {
        serialPort.write('1');
        res.redirect("/");
    }
    
    if (sendShit == "about")
    {
        res.setHeader('Content-Type','application/json');
        data=JSON.stringify({rick:counter});
        res.end(data);
    }
})

app.post('/',(req,res)=>{
    console.log(counter);
    res.redirect("/ONSHIT");
    data=JSON.stringify({rick:counter});
    fs.writeFile("rickShit.json",data,err=>{
        console.log(err? "error":"gut")
    })
    counter++;
});

app.listen(port,(err)=>{
    console.log(err? "Something wrong lol":`Listening to http://${host}:${port}`);
});