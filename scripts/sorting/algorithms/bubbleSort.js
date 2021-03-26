function BubbleSort() {
    cDelay = 0;
    for (let i = 0; i < arraySize - 1; i++) {
        time.push(cDelay / 1000);
        memoryUsage.push(window.performance.memory.usedJSHeapSize / 1000000);
        for (var j = 0; j < (arraySize - i - 1); j++) {
            updateDiv(divs[j], div_sizes[j], yellowGradient);
            if (div_sizes[j] > div_sizes[j + 1]) {
                updateDiv(divs[j], div_sizes[j], redGradient);
                updateDiv(divs[j + 1], div_sizes[j + 1], redGradient);
                const temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;
                updateDiv(divs[j], div_sizes[j], redGradient);
                updateDiv(divs[j + 1], div_sizes[j + 1], redGradient);
            }
            updateDiv(divs[j], div_sizes[j], blueGradient);
        }
        updateDiv(divs[j], div_sizes[j], greenGradient);
    }
    updateDiv(divs[0], div_sizes[0], greenGradient);
    enableButtons();
    xAxisCount();
    toast("Bubble Sort", time[time.length - 1], memoryUsage[memoryUsage.length - 1]);
}