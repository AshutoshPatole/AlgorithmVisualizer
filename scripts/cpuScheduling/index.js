let chart, total, max, min, queue, processes, quant = 2;
class Process {
    constructor(idx, arrival, burst) {
        this.id = idx;
        this.arrivalTime = arrival;
        this.burstTime = burst;
        this.consumedTime = 0;
    }
}
class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty())
            return -1;
        return this.items.shift();
    }

    front() {
        if (this.isEmpty())
            return -1;
        return this.items[0];
    }
}
function generateProcesses() {
    document.getElementById("timer").innerHTML = "Current Time - " + 0 + " seconds";
    [min, max] = [15, 20];
    total = Math.floor(Math.random() * (max - min + 1)) + min;
    chart = new CanvasJS.Chart("chartContainer", {
        axisX: {
            title: "---Arrival Time-->"
        },
        axisY: {
            title: "---Burst Time-->",
            minimum: 0,
            maximum: 20,
            interval: 1
        },
        data: [
            {
                type: "stackedColumn",
                color: "#3859B2",
                legendText: "ToBeProcessed",
                showInLegend: "true",
                dataPoints: []
            },
            {
                type: "stackedColumn",
                color: "#33ff00",
                legendText: "Processed",
                showInLegend: "true",
                dataPoints: []
            }
        ]
    });
    chart.render();

    [min, processes] = [1, []];
    for (let i = 0; i < total; i++) {
        let label_ = String.fromCharCode(65 + i);
        let burst = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        let arrival = Math.floor(Math.random() * 3) + min - 1;
        let process = new Process(i, arrival, burst);
        min = arrival + 1;

        processes.push(process);
        chart.data[1].dataPoints.push({ label: label_ + "(" + arrival + ")", y: 0 });
        chart.data[0].dataPoints.push({ label: label_ + "(" + arrival + ")", y: burst });
    }
    chart.render();
}


window.onload = generateProcesses();
document.getElementById("regenerate").onclick = function () { generateProcesses(); };
document.getElementById("fcfs").onclick = function () { firstComeFirstServe(); };
document.getElementById("srjf").onclick = function () { shortestJobFirst(); };
document.getElementById("srtf").onclick = function () { shortestRemainingTimeFirst(); };
document.getElementById("round-robin").onclick = function () { roundRobin(); };
