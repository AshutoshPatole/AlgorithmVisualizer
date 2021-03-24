function InsertionSort() {
    cDelay = 0;

    for (var j = 0; j < arraySize; j++) {
        let memory = window.performance.memory.usedJSHeapSize / 1000000;
        let delay = cDelay / 1000;
        time.push(delay);
        // allAlgoSpeedResult[2] = delay;
        memoryUsage.push(memory);
        // allAlgoMemoryUsage[2] = memory;
        updateDiv(divs[j], div_sizes[j], yellowGradient);
        let key = div_sizes[j];
        let i = j - 1;
        while (i >= 0 && div_sizes[i] > key) {
            updateDiv(divs[i], div_sizes[i], redGradient);
            updateDiv(divs[i + 1], div_sizes[i + 1], redGradient);

            div_sizes[i + 1] = div_sizes[i];

            updateDiv(divs[i], div_sizes[i], redGradient);
            updateDiv(divs[i + 1], div_sizes[i + 1], redGradient);

            updateDiv(divs[i], div_sizes[i], blueGradient);
            if (i == (j - 1)) {
                updateDiv(divs[i + 1], div_sizes[i + 1], yellowGradient);
            } else {
                updateDiv(divs[i + 1], div_sizes[i + 1], blueGradient);

            }
            i -= 1;

        }
        div_sizes[i + 1] = key;
        for (let sort = 0; sort < j; sort++) {
            updateDiv(divs[sort], div_sizes[sort], greenGradient);
        }
    }
    updateDiv(divs[j - 1], div_sizes[j - 1], greenGradient);
    enableButtons();
    xAxisCount();
    toast(time[time.length - 1], memoryUsage[memoryUsage.length - 1]);
}