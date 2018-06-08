const express = require('express');
const robot = require('robotjs');
const ip = require('ip');
const qrcode = require('qrcode-terminal');

const app = express();
const port = 8080;

//to serve static files for client
app.use(express.static('public'));

//serve the html page with buttons
app.get('/', (req, res) => {
        res.sendFile('public/index.html', {root: __dirname});
});

//get the request from the client, with key name
app.get('/key', (req, res) => {
    //check whether the key name is set
    if (!req.query.id) {
        //if not send 202
        res.status(202).send('NO INPUT');
    }else {
        //if set, make robotjs to keytap that key
        robot.keyTap(req.query.id);
        res.status(200).send('SUCCESS');
    }
});

app.listen(8080, function (err) {
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