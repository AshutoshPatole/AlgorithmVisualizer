let arraySizeSlider = document.getElementById('array_size');
let generateArrayButton = document.getElementById("generate_array");
let sortingSpeed = document.getElementById("sorting_speed");
let algorithmButtons = document.querySelectorAll(".algos button");
let container = document.getElementById("array_container");
let compare = document.getElementById("compare");
let modal = document.getElementById("modal-content");
let modalHeader = document.getElementById("runningAloName");
let markdown = document.getElementById("markdown");
let legends = document.getElementById("legends");


let div_sizes = [];
let divs = [];
let marginSize;
let runningAlgo = "";
let arraySize = arraySizeSlider.value;


generateArrayButton.addEventListener("click", generateArrayAndResetGraph);
arraySizeSlider.addEventListener("input", updateArraySize);

if (isMobile) {
    legends.style = "display: none";
    container.style = "width: 100%";
    arraySizeSlider.setAttribute("max", 100);;
}
function generateArray() {
    container.innerHTML = "";
    for (let i = 0; i < arraySize; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.35 * (arraySizeSlider.max - arraySizeSlider.min)) + 10;
        divs[i] = document.createElement("div");
        container.appendChild(divs[i]);
        marginSize = isMobile ? 0.2 : 0.1;
        let height = isMobile ? div_sizes[i] * 1.5 : div_sizes[i];
        if (arraySize < 50) {
            divs[i].innerHTML = div_sizes[i];
        }
        divs[i].style = " margin:0% " + marginSize + "%; background-image:linear-gradient(#614385, #3859B2); width:" + (100 / arraySize - (2 * marginSize)) + "%; height:" + height + "%; text-align: center";
    }
}

function checkBrowser() {
    if (navigator.userAgent.indexOf("Firefox") > -1) {
        window.location.href = "error.html";
    }
}

checkBrowser();

function updateArraySize() {
    arraySize = arraySizeSlider.value;
    generateArray();
}
window.onload = updateArraySize();

for (let i = 0; i < algorithmButtons.length; i++) {
    algorithmButtons[i].addEventListener("click", startSortingAlgorithm);
}

function disableButtons() {
    for (let i = 0; i < algorithmButtons.length; i++) {
        algorithmButtons[i].classList = [];
        algorithmButtons[i].classList.add("disabled");
        algorithmButtons[i].disabled = true;
    }
    sortingSpeed.disabled = true;
    generateArrayButton.disabled = true;
    arraySizeSlider.disabled = true;

}
document.getElementById("info").addEventListener('click', () => {
    console.log("Clicked")
    markdown.innerHTML = `<zero-md src='scripts/sorting/algorithmsMD/info.md'></zero-md>`;

});
showAlgoInfo();

function startSortingAlgorithm() {
    disableButtons();
    runningAlgo = this.innerHTML;
    showAlgoInfo();
    switch (this.innerHTML) {
        case "Bubble":
            BubbleSort();
            break;
        case "Selection":
            SelectionSort();
            break;
        case "Insertion":
            InsertionSort();
            break;
        case "Merge":
            MergeSort();
            break;
        case "Quick":
            QuickSort();
            break;
        case "Heap":
            HeapSort();
            break;
    }
}

let cTime = 0;

function enableButtons() {
    cTime = cDelay;
    window.setTimeout(function () {
        for (let i = 0; i < algorithmButtons.length; i++) {
            algorithmButtons[i].classList.remove("disabled");

            algorithmButtons[i].disabled = false;
        }
        sortingSpeed.disabled = false;
        generateArrayButton.disabled = false;
        arraySizeSlider.disabled = false;

    }, cDelay += delayTime);
}

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
    el.addEventListener("click", function () {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    });
}

for (const el of closeEls) {
    el.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
}

document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

document.addEventListener("keyup", e => {

    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

let time = [];
let xAxis = [];
let memoryUsage = [];

function xAxisCount() {
    for (let i = 0; i < time.length; i++) {
        xAxis.push(i + 2);
    }
}

let timeChart = document.getElementById('time').getContext('2d');
let data = {
    labels: [0],
    datasets: [{
        label: 'Time',
        data: [0],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2
    }]
};
let myChart = new Chart(timeChart, {
    type: 'line',
    data: data,
    options: {
        maintainAspectRatio: false,
        responsive: true,
        animations: {
            tension: {
                duration: 100,
                easing: 'linear',
                from: 0,
                to: 1,
                loop: false
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Time in Seconds'
                }
            }]
        }
    }
});
let index = 0, spaceIndex = 0;
setInterval(() => {
    let temp = [], spaceTemp = [];
    if (time.length == 0 && memoryUsage.length == 0) {
    }
    else if (time.length == index + 1) {

    }
    else {
        temp = time.slice(0, index);
        spaceTemp = memoryUsage.slice(0, spaceIndex);
        tempAxis = xAxis.slice(0, index);
        index++;
        spaceIndex++;
        myChart.data.labels = xAxis;
        myChart.data.datasets[0].data = temp;
        myChart.update();

        spaceChart.data.labels = xAxis;
        spaceChart.data.datasets[0].data = spaceTemp;
        spaceChart.update();
    }
}, 250);

function generateArrayAndResetGraph() {
    generateArray();
    myChart.data.labels = [];
    myChart.data.datasets[0].data = [];
    myChart.update();
    time = [];
    memoryUsage = [];
}


let space = document.getElementById('space').getContext('2d');
let spaceData = {
    labels: [0],
    datasets: [{
        label: 'Memory Usage',
        data: [0],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 2
    }]
};
let spaceChart = new Chart(space, {
    type: 'line',
    data: spaceData,
    options: {
        maintainAspectRatio: false,
        responsive: true,
        animations: {
            tension: {
                duration: 100,
                easing: 'linear',
                from: 0,
                to: 1,
                loop: false
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Space in MB'
                }
            }]
        }
    }
});

function showAlgoInfo() {
    if (runningAlgo.length == 0) {
        modalHeader.innerHTML = "No algorithm has been run yet";
    }
    else {
        modalHeader.innerHTML = runningAlgo + " Sort";
        markdown.innerHTML = `<zero-md src='scripts/sorting/algorithmsMD/${runningAlgo}.md'></zero-md>`;
    }
}