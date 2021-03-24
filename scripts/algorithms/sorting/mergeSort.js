function MergeSort() {

    cDelay = 0;
    mergePartition(0, arraySize - 1);
    enableButtons();
    xAxisCount();
    toast(time[time.length - 1], memoryUsage[memoryUsage.length - 1]);
}



function mergePartition(start, end) {
    if (start < end) {
        let middle = Math.floor((start + end) / 2);
        updateDiv(divs[middle], div_sizes[middle], yellowGradient);
        mergePartition(start, middle);
        mergePartition(middle + 1, end);
        mergeSort(start, middle, end);
    }
}

function mergeSort(start, middle, end) {
    let memory = window.performance.memory.usedJSHeapSize / 1000000;
    let delay = cDelay / 1000;
    time.push(delay);
    // allAlgoSpeedResult[3] = delay;
    memoryUsage.push(memory);
    // allAlgoMemoryUsage.push(memory);
    let s = start,
        m = middle + 1;
    let tempArray = [],
        temp = 0;
    for (let i = start; i <= end; i++) {
        if (s > middle) {
            tempArray[temp++] = div_sizes[m++];
            updateDiv(divs[m - 1], div_sizes[m - 1], redGradient);
        } else if (m > end) {
            tempArray[temp++] = div_sizes[s++];
            updateDiv(divs[s - 1], div_sizes[s - 1], redGradient);
        } else if (div_sizes[s] < div_sizes[m]) {
            tempArray[temp++] = div_sizes[s++];
            updateDiv(divs[s - 1], div_sizes[s - 1], redGradient);
        } else {
            tempArray[temp++] = div_sizes[m++];
            updateDiv(divs[m - 1], div_sizes[m - 1], redGradient);
        }
    }
    for (let j = 0; j < temp; j++) {
        div_sizes[start++] = tempArray[j];
        updateDiv(divs[start - 1], div_sizes[start - 1], greenGradient);

    }
}