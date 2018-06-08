#! /usr/bin/env node

const express = require('express');
const robot = require('robotjs');
const ip = require('ip');
const qrcode = require('qrcode-terminal');

const app = express(); //initialize an express server
const server = require('http').Server(app);// init an http server for socket.io
const io = require('socket.io')(server);
const port = 8080;

//only these keys will be activated by robot
const keys = ['left', 'right', 'up', 'down', 'space'];

//to serve static files for client
app.use(express.static('public'));

//serve the html page with buttons
app.get('/', (req, res) => {
        res.sendFile('public/index.html', {root: __dirname});
});

//on new connection to socket.io
io.on('connection', function(socket) {
    socket.emit('status', 200); //send initial status code
    //get button click event and fire robot keyTap
    socket.on('key', async function(data) {
        console.log(data);
        if (data && keys.includes(data)){
            try{
                await robot.keyTap(data);
            }catch(error) {
                console.log(error);
            };
            
        }
    });
});

server.listen(8080, function (err) {
    if (!err) {
        //if no error display the local ip
        console.log("\n\nLocal: http://127.0.0.1:"+port);
        //get the network ip and display it
        let network_address = "http://"+ip.address()+":"+port;
        console.log("Network: "+network_address+"\n\n");
        //generate and display the qr code for network ip on terminal
        qrcode.generate(network_address);
    }else {
        console.log("Unable to run the server. is your port 8080 already used?");
        this.close();
    }
})