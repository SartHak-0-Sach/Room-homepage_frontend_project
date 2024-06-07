let images = null;
let descriptions = null;
let classImage = ".image";
let classDesc = ".desc";
let currentObj = 0;
let newObj = 0;
let size = 0;
let transitionLeft = "left";
let transitionRight = "right";
let animate = "transition";
let start = "Start";
let end = "End";


function transition() {
    images.forEach((image, indx) => {
        image.style.transform = `translateX(${100 * (indx - currentObj)}%)`;
    });
    descriptions.forEach((desc, indx) => {
        desc.style.transform = `translateX(${100 * (indx - currentObj)}%)`;
    });
}

function move(direction) {

    if (direction == transitionLeft) {
        currentObj--;
        if (currentObj < 0) {
            currentObj = size - 1;
        }
    } else if (direction == transitionRight) {
        currentObj++;
        if (currentObj >= size) {
            currentObj = 0;
        }
    } else {
        console.log("Wrong direction parameter. Carousel won't move.");
        return;
    }

    transition();

}

function init() {

    images = document.querySelectorAll(classImage);
    descriptions = document.querySelectorAll(classDesc);
    size = images.length;

    currentObj = 0;

    transition();
}