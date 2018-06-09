#! /usr/bin/env node

const express = require('express');
const robot = require('robotjs');
const ip = require('ip');
const qrcode = require('qrcode-terminal');
const prompt = require('prompt');

const app = express(); //initialize an express server
const server = require('http').Server(app); // init an http server for socket.io
const io = require('socket.io')(server);

//only these keys will be activated by robot
const keys = ['left', 'right', 'up', 'down', 'space'];

//to serve static files for client
app.use(express.static('public'));

//serve the html page with buttons
app.get('/', (req, res) => {
    res.sendFile('public/index.html', {
        root: __dirname
    });
});

//on new connection to socket.io
io.on('connection', function (socket) {
    socket.emit('status', 200); //send initial status code
    //get button click event and fire robot keyTap
    socket.on('key', async function (data) {
        console.log(data);
        if (data && keys.includes(data)) {
            try {
                await robot.keyTap(data);
            } catch (error) {
                console.log(error);
            };

        }
    });
});

//init schema for user input
const schema = {
    properties: {
        portNumber: {
            description: 'Type a port number - Press Enter to start with -> ',
            default: '8080',
            conform: function (value) {
                if (/^[0-9]+$/.test(value)) {
                    //check whether the requested port is in protected range.
                    if (value >= 1024 && value <= 65535)
                        return true;
                    else {
                        schema.properties.portNumber.message = 'Port Number should be within (1024 - 65535) Due to root privilege requirement '
                        return false;
                    }
                } else {
                    schema.properties.portNumber.message = 'Port number should be only numbers'
                    return false;
                }
            }
        }
    }
};

//prompt for port to run the server
prompt.start();
prompt.get(schema, function (err, result) {
    //use default port, if input is invalid
    const port = result ? result.portNumber : 8080
    server.listen(port, function (err) {
        if (!err) {
            //if no error display the local ip
            console.log("\n\nLocal: http://127.0.0.1:" + port);
            //get the network ip and display it
            let network_address = "http://" + ip.address() + ":" + port;
            console.log("Network: " + network_address + "\n\n");
            //generate and display the qr code for network ip on terminal
            qrcode.generate(network_address);
        } else {
            console.log("Unable to run the server, is your port"+ port +" already used?");
            this.close();
        }
    })
});