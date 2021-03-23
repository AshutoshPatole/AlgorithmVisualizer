function QuickSort() {
    cDelay = 0;
    quickSort(0, arraySize - 1);
    enableButtons();
    xAxisCount();
}

function quickSort(start, end) {
    if (start < end) {
        let pivotIndex = quickPartition(start, end);
        quickSort(start, pivotIndex - 1);
        quickSort(pivotIndex + 1, end);
    }
}

function quickPartition(start, end) {
    // console.log(window.performance.memory.usedJSHeapSize);
    let memory = window.performance.memory.usedJSHeapSize / 1000000;
    let delay = cDelay / 1000;
    time.push(delay);
    // allAlgoSpeedResult[4] = delay;
    memoryUsage.push(memory);
    // allAlgoMemoryUsage[4] = memory;
    let i = start + 1;
    let pivotIndex = div_sizes[start];
    updateDiv(divs[start], div_sizes[start], yellowGradient);
    for (let j = start; j <= end; j++) {
        if (div_sizes[j] < pivotIndex) {
            updateDiv(divs[j], div_sizes[j], yellowGradient);

            updateDiv(divs[i], div_sizes[i], redGradient);
            updateDiv(divs[j], div_sizes[j], redGradient);

            const temp = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = temp;
            updateDiv(divs[i], div_sizes[i], redGradient);
            updateDiv(divs[j], div_sizes[j], redGradient);

            updateDiv(divs[i], div_sizes[i], blueGradient);
            updateDiv(divs[j], div_sizes[j], blueGradient);
            i += 1;
        }
    }
    updateDiv(divs[start], div_sizes[start], redGradient);
    updateDiv(divs[i - 1], div_sizes[i - 1], redGradient);
    const temp = div_sizes[start];
    div_sizes[start] = div_sizes[i - 1];
    div_sizes[i - 1] = temp;
    updateDiv(divs[start], div_sizes[start], redGradient);
    updateDiv(divs[i - 1], div_sizes[i - 1], redGradient);

    for (let k = start; k <= i; k++) {
        updateDiv(divs[k], div_sizes[k], greenGradient);
    }
    return i - 1;
}