let speed = 100;

sortingSpeed.addEventListener("input", visualizeSpeed);
let delayTime = 10000 / (Math.floor(arraySize / 10) * speed);
let cDelay = 0;

function visualizeSpeed() {
    let arraySortingSpeed = sortingSpeed.value;
    // console.log(arraySortingSpeed);
    switch (parseInt(arraySortingSpeed)) {
        case 1:
            speed = 1;
            break;
        case 2:
            speed = 10;
            break;
        case 3:
            speed = 50;
            break;
        case 4:
            speed = 100;
            break;
        case 5:
            speed = 500;
            break;
    }
    delayTime = 10000 / (Math.floor(arraySize / 10) * speed);
    // console.log(speed);
}

function updateDiv(container, height, gradient) {
    window.setTimeout(function() {
        container.style = " margin:0% " + marginSize + "%; width:" + (100 / arraySize - (2 * marginSize)) + "%; height:" + height + "%; background-image:" + gradient + ";";
        if (arraySize < 50) {
            container.innerHTML = height;
        }
    }, cDelay += delayTime);
}