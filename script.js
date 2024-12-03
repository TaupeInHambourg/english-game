let small = ["-2", "2"];
let medium = ["-6", "6"];
let large = ["-10", "10"];

function randomizePoint(array){
    const max = array[0];
    const min = array[1];
    function getRandomInt(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

function reveal(){
    const flipBoxes = document.querySelectorAll(".flip_box");
    flipBoxes.forEach(flipBox => {
        flipBox.classList.toggle("flipped");
    });
}