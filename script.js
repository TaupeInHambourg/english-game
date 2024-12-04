let small = ["-2", "2"];
let medium = ["-6", "6"];
let large = ["-10", "10"];
let pointArray = [];

function randomizePoint(array){
    const max = parseInt(array[0]);
    const min = parseInt(array[1]);
    return Math.floor(Math.random() * (max - min) + min);
}

function reveal(){
    const flipBoxes = document.querySelectorAll(".flip_box");
    if (pointArray.length == 0){
        flipBoxes.forEach(flipBox => {

            // Flip the card
            flipBox.classList.toggle("flipped");

            // Attribute point to each cards
            let size = flipBox.getAttribute("bloc-size");
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

            // Save the points in an array
            pointArray.push(point);

            // Write the point on the card
            for (let i = 0; i < flipBoxes.length; i++) {
                if (flipBox==flipBoxes[i]){
                    const pointAreas = document.querySelectorAll('.point');
                    pointAreas[i].innerHTML=`The block value is ${point}`;
                }
            }
        });
    } else {
        flipBoxes.forEach(flipBox => {
            flipBox.classList.toggle("flipped");
        })
        console.log("pointArray", pointArray);
    }
}

function reset(){
    pointArray = [];
    const flipBoxes = document.querySelectorAll(".flip_box");
    if (pointArray.length == 0){
        flipBoxes.forEach(flipBox => {
            // Attribute point to each cards
            let size = flipBox.getAttribute("bloc-size");
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

            // Save the points in an array
            pointArray.push(point);

            // Write the point on the card
            for (let i = 0; i < flipBoxes.length; i++) {
                if (flipBox==flipBoxes[i]){
                    const pointAreas = document.querySelectorAll('.point');
                    pointAreas[i].innerHTML=`The block value is ${point}`;
                }
            }
        });
    }
}