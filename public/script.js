
const buttons = document.querySelectorAll('.btn');
// for every button attach click listeners
buttons.forEach(btn => {
    
    // when a button is pressed, send the data-key attribute as param for the server 
    btn.addEventListener('click', function(){
        //you'll get the attribute here
        console.log(this.getAttribute('data-key'));

        //TODO: send the data-key as parameter to /key
    
    });

})