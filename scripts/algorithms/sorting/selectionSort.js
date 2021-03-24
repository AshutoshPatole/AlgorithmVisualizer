function SelectionSort() {
    cDelay = 0;
    let minIndex = 0;
    for (let i = 0; i < arraySize - 1; i++) {
        let memory = window.performance.memory.usedJSHeapSize / 1000000;
        let delay = cDelay / 1000;
        time.push(delay);
        // allAlgoSpeedResult[1] = delay;
        memoryUsage.push(memory);
        // allAlgoMemoryUsage.push(memory);
        updateDiv(divs[i], div_sizes[i], redGradient);
        minIndex = i;
        for (var j = i + 1; j < arraySize; j++) {
            updateDiv(divs[j], div_sizes[j], yellowGradient);
            if (div_sizes[minIndex] > div_sizes[j]) {
                if (minIndex != i) {
                    updateDiv(divs[minIndex], div_sizes[minIndex], blueGradient);
                }
                minIndex = j;
                updateDiv(divs[minIndex], div_sizes[minIndex], redGradient);

            } else {
                updateDiv(divs[j], div_sizes[j], blueGradient);

            }

        }
        if (minIndex != i) {
            const temp = div_sizes[minIndex];
            div_sizes[minIndex] = div_sizes[i];
            div_sizes[i] = temp;
            updateDiv(divs[minIndex], div_sizes[minIndex], redGradient);
            updateDiv(divs[i], div_sizes[i], redGradient);
            updateDiv(divs[minIndex], div_sizes[minIndex], blueGradient);
        }
        updateDiv(divs[i], div_sizes[i], greenGradient);

    }

    updateDiv(divs[arraySize - 1], div_sizes[arraySize - 1], greenGradient);
    xAxisCount();
    enableButtons();
    toast(time[time.length - 1], memoryUsage[memoryUsage.length - 1]);

}