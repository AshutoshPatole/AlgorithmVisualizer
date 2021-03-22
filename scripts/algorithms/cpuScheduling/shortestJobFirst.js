function shortestJobFirst() {
    quant = 2;
    let time = 0;
    let processed = new Set();
    queue = new Queue;
    while (processed.size < processes.length) {
        let i = 0;
        let min = -1;
        while (i < processes.length && processes[i].arrivalTime <= time) {
            if ((min == -1 || min.burstTime > processes[i].burstTime) && !processed.has(processes[i].id))
                min = processes[i];
            i++;
        }
        if (min == -1)
            time += quant;
        else {
            time = Math.max(time, min.arrivalTime) + min.burstTime;
            processed.add(min.id);
            queue.enqueue(min);
        }
    }
    time = queue.front().arrivalTime;
    document.getElementById("timer").innerHTML = "Current Time - " + time + " seconds";
    (function traverse() {
        if (!queue.isEmpty()) {
            let wait = Math.ceil(1000 / quant);
            setTimeout(function () {
                time += Math.min(queue.front().burstTime - queue.front().consumedTime, quant);
                document.getElementById("timer").innerHTML = "Current Time - " + time + " seconds";

                let front = fcfsHelper();
                if (front.burstTime == front.consumedTime) {
                    wait = 0;
                    queue.dequeue();
                }
                traverse();
            }, wait);
        }
    })();
}
