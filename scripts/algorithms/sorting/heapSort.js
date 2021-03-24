function HeapSort() {
    c_delay = 0;

    heap_sort();
    enableButtons();
    xAxisCount();
    toast(time[time.length - 1], memoryUsage[memoryUsage.length - 1]);
}

function swap(i, j) {
    updateDiv(divs[i], div_sizes[i], redGradient);
    updateDiv(divs[j], div_sizes[j], redGradient);

    let temp = div_sizes[i];
    div_sizes[i] = div_sizes[j];
    div_sizes[j] = temp;

    updateDiv(divs[i], div_sizes[i], redGradient);
    updateDiv(divs[j], div_sizes[j], redGradient);

    updateDiv(divs[i], div_sizes[i], blueGradient);
    updateDiv(divs[j], div_sizes[j], blueGradient);
}

function max_heapify(n, i) {
 
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && div_sizes[l] > div_sizes[largest]) {
        if (largest != i) {
            updateDiv(divs[largest], div_sizes[largest], blueGradient);
        }

        largest = l;

        updateDiv(divs[largest], div_sizes[largest], redGradient);
    }

    if (r < n && div_sizes[r] > div_sizes[largest]) {
        if (largest != i) {
            updateDiv(divs[largest], div_sizes[largest], blueGradient);
        }

        largest = r;

        updateDiv(divs[largest], div_sizes[largest], redGradient);
    }

    if (largest != i) {
        swap(i, largest);

        max_heapify(n, largest);
    }
}

function heap_sort() {
    for (let i = Math.floor(arraySize / 2) - 1; i >= 0; i--) {
        max_heapify(arraySize, i);
    }

    for (let i = arraySize - 1; i > 0; i--) {
        let memory = window.performance.memory.usedJSHeapSize / 1000000;
        let delay = cDelay / 1000;
        time.push(delay);
        // allAlgoSpeedResult[5] = delay;
        memoryUsage.push(memory);
        // allAlgoMemoryUsage[5] = memory;
        swap(0, i);
        updateDiv(divs[i], div_sizes[i], greenGradient);
        updateDiv(divs[i], div_sizes[i], yellowGradient);

        max_heapify(i, 0);

        updateDiv(divs[i], div_sizes[i], blueGradient);
        updateDiv(divs[i], div_sizes[i], greenGradient);
    }
    updateDiv(divs[0], div_sizes[0], greenGradient);
}