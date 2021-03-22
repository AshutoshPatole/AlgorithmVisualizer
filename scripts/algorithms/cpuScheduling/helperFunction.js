function fcfsHelper() {
    let front = queue.front();
    if (front.burstTime > front.consumedTime) {
        wait = Math.ceil(1000 / quant);
        front.consumedTime += quant;
        front.consumedTime = (front.consumedTime > front.burstTime ? front.burstTime : front.consumedTime);
        chart.data[0].dataPoints[front.id].y = front.burstTime - front.consumedTime;
        chart.data[1].dataPoints[front.id].y = front.consumedTime;
        chart.render();
    }
    queue.front().consumedTime = front.consumedTime;
    return queue.front();
}
