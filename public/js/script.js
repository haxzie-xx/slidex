//create a new socket connection
const socket = io.connect('/');
socket.on('status', function (data) {
    if (data === 200){
        console.log('Connected to socket');
    }
});

//get all the buttons
const buttons = document.querySelectorAll('.btn');
// for every button attach click listeners
buttons.forEach(btn => {
    
    // when a button is pressed, send the data-key attribute as param for the server 
    btn.addEventListener('click', function(){
        //emit the pressed key data to the socket
        console.log(this.getAttribute('data-key'));
        socket.emit('key', this.getAttribute('data-key'));
    });

})