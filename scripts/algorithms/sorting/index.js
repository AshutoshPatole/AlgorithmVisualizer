// accessing html elements using by their ID

let arraySizeSlider = document.getElementById('array_size');
let generateArrayButton = document.getElementById("generate_array");
let sortingSpeed = document.getElementById("sorting_speed");
let algorithmButtons = document.querySelectorAll(".algos button");
let container = document.getElementById("array_container");

/* 
    we will create 2 arrays here
        ==> div_sizes[0..n] will store the heights of the respected div(bar)
        ==> divs[0..n] will store the elements i.e a div
*/
let div_sizes = [];
let divs = [];
let marginSize;

// arraySize holds the value/input from the slider
let arraySize = arraySizeSlider.value;

// Event Listeners
generateArrayButton.addEventListener("click", generateArrayAndResetGraph);
arraySizeSlider.addEventListener("input", updateArraySize);

/* 
    generateArray function 
        ==> it creates random heights for the bars using maximum and minimum value of the slider and height of the page,
            it then stores the generated random heights in the div_sizes array[0..n]
        ==> the divs[] array now creates div element and store them,
            we then append those divs to the container area
        ==> if the arraySize is more than 50 we will not show the height inside the div & at last we did some styling for each bar
*/
function generateArray() {
    container.innerHTML = "";
    for (let i = 0; i < arraySize; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.35 * (arraySizeSlider.max - arraySizeSlider.min)) + 10;
        divs[i] = document.createElement("div");
        container.appendChild(divs[i]);
        marginSize = 0.1;
        // console.log(`this is size of array : ${arraySize}`);
        if (arraySize < 50) {
            divs[i].innerHTML = div_sizes[i];
        }
        divs[i].style = " margin:0% " + marginSize + "%; background-image:linear-gradient(#614385, #3859B2); width:" + (100 / arraySize - (2 * marginSize)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

// this function is called whenever user changes arraySize slider
function updateArraySize() {
    arraySize = arraySizeSlider.value;
    generateArray();
}
window.onload = updateArraySize();

for (let i = 0; i < algorithmButtons.length; i++) {
    algorithmButtons[i].addEventListener("click", startSortingAlgorithm);
}


// disable interactions while algorithm is running
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

// starting sorting algorithm
function startSortingAlgorithm() {
    disableButtons();
    // this.classList.add("selectedAlgo");
    console.log(this.innerHTML);
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
// enable interactions after completion of algorithm
function enableButtons() {
    console.log(`Buttons unlocked.... ${cDelay}`);
    cTime = cDelay;
    window.setTimeout(function () {
        for (let i = 0; i < algorithmButtons.length; i++) {
            algorithmButtons[i].classList.remove("disabled");
            // algorithmButtons[i].classList.remove("selectedAlgo");
            algorithmButtons[i].disabled = false;
        }
        sortingSpeed.disabled = false;
        generateArrayButton.disabled = false;
        arraySizeSlider.disabled = false;

    }, cDelay += delayTime);
}
let time = [];
let xAxis = [];
let memoryUsage = [];


function xAxisCount() {
    for (let i = 0; i < time.length; i++) {
        xAxis.push(i + 2);
    }
}

// ChartJs

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
        console.log("do nothing");
    }
    else if (time.length == index + 1) {
        console.log("Sorting finished");

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