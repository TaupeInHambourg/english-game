let event = ["event1", "event2"];

function randomizeEvent(event){
    const max = event.lenght;
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
      
    console.log(getRandomInt(3));
}