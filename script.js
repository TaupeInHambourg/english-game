let small = ["-2", "2"];
let medium = ["-6", "6"];
let large = ["-10", "10"];

function randomizePoint(array){
    const max = parseInt(array[0]);
    const min = parseInt(array[1]);
    console.log(Math.floor(Math.random() * (max - min) + min))   
}

function reveal(){
    const flipBoxes = document.querySelectorAll(".flip_box");
    flipBoxes.forEach(flipBox => {
        flipBox.classList.toggle("flipped");
        let size = flipBox.getAttribute("bloc-size");
        let pointArray = [];
        let point = null;

        switch (size) {
            case 'small':
                point = randomizePoint(small);
                break;
            case 'medium':
                point = randomizePoint(medium);
                break;
            case 'large':
                point = randomizePoint(large);
                break;
            default:
                break;
        }
        pointArray.push(point);
    });
}