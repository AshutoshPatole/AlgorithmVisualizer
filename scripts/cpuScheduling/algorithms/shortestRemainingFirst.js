function shortestRemainingTimeFirst() {
    let [ctr, time] = [0, 0];
    quant = 1;
    document.getElementById("timer").innerHTML = "Current Time - " + time + " seconds";
    (function traverse() {
        if (ctr < processes.length) {
            let wait = Math.ceil(250 / quant);
            setTimeout(function () {
                let i = 0;
                let min = -1;
                while (i < processes.length && processes[i].arrivalTime <= time) {
                    if ((min == -1 || (min.burstTime - min.consumedTime) > (processes[i].burstTime - processes[i].consumedTime)) && processes[i].burstTime > processes[i].consumedTime)
                        min = processes[i];
                    i++;
                }
                if (min != -1) {
                    processes[min.id].consumedTime += quant;
                    processes[min.id].consumedTime = (processes[min.id].consumedTime > processes[min.id].burstTime ? processes[min.id].burstTime : processes[min.id].consumedTime);
                    chart.data[0].dataPoints[min.id].y = processes[min.id].burstTime - processes[min.id].consumedTime;
                    chart.data[1].dataPoints[min.id].y = processes[min.id].consumedTime;
                    chart.render();

                    if (processes[min.id].burstTime == processes[min.id].consumedTime)
                        ctr++;
                }
                time += quant;
                document.getElementById("timer").innerHTML = "Current Time - " + time + " seconds";
                traverse();
            }, wait);
        }
    })();
}
