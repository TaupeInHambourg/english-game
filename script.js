let small = ["-2", "2"];
let medium = ["-6", "6"];
let mediumplus = ["-8", "8"];
let large = ["-10", "10"];
let pointArray = [];

function addCards(){
    let cards = [
        {
            "size" : "small",
            "url" : "small-1.png",
        },
        {
            "size" : "small",
            "url" : "small-2.png",
        },
        {
            "size" : "small",
            "url" : "small-3.png",
        },
        {
            "size" : "medium",
            "url" : "medium-1.png",
        },
        {
            "size" : "medium",
            "url" : "medium-2.png",
        },
        {
            "size" : "medium",
            "url" : "medium-3.png",
        },
        {
            "size" : "medium",
            "url" : "medium-4.png",
        },
        {
            "size" : "mediumplus",
            "url" : "mediumplus-1.png",
        },
        {
            "size" : "mediumplus",
            "url" : "mediumplus-2.png",
        },
        {
            "size" : "mediumplus",
            "url" : "mediumplus-3.png",
        },
        {
            "size" : "mediumplus",
            "url" : "mediumplus-4.png",
        },
        {
            "size" : "large",
            "url" : "large-1.png",
        },
        {
            "size" : "large",
            "url" : "large-2.png",
        },
        {
            "size" : "large",
            "url" : "large-3.png",
        },
    ]
    for (let j = 0; j < cards.length; j++) {
        const cardWrap = document.querySelector(".flex-wrap");
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "card-container");
        newDiv.innerHTML=`
            <div class="flip_box card" bloc-size="`+cards[j]['size']+`">
                <div class="front front-img flex">
                    <img class="flip" src="./src/blocks/`+cards[j]['url']+`">
                </div>
                <div class="back flex flex-column">
                    <img src="./src/blocks/`+cards[j]['url']+`">
                    <p class="flip point">test</p>
                </div>    
            </div>
        `
        cardWrap.appendChild(newDiv);
    }
}
addCards();

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
                case 'mediumplus':
                    point = randomizePoint(mediumplus);
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