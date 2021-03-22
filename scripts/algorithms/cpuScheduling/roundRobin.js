function roundRobin() {
    [quant, queue] = [2, new Queue()];
    queue.enqueue(processes[0]);
    let [i, time] = [1, processes[0].arrivalTime];
    document.getElementById("timer").innerHTML = "Current Time - " + time + " seconds";
    (function traverse() {
        if (!queue.isEmpty()) {
            let wait = Math.ceil(1000 / quant);
            setTimeout(function () {
                let front = queue.front();
                time += Math.min(front.burstTime - front.consumedTime, quant);
                document.getElementById("timer").innerHTML = "Current Time - " + time + " seconds";

                while (i < processes.length && processes[i].arrivalTime <= time)
                    queue.enqueue(processes[i++]);

                fcfsHelper();
                front = queue.dequeue();
                if (front.burstTime > front.consumedTime) {
                    wait = 0;
                    queue.enqueue(front);
                }
                traverse();
            }, wait);
        }
    })();
}
