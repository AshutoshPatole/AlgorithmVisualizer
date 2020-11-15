function SelectionSort() {
    cDelay = 0;
    let minIndex = 0;
    for (let i = 0; i < arraySize - 1; i++) {
        updateDiv(divs[i], div_sizes[i], redGradient, div_sizes[i]);
        minIndex = i;
        for (var j = i + 1; j < arraySize; j++) {
            updateDiv(divs[j], div_sizes[j], yellowGradient, div_sizes[j]);
            if (div_sizes[minIndex] > div_sizes[j]) {
                if (minIndex != i) {
                    updateDiv(divs[minIndex], div_sizes[minIndex], blueGradient, div_sizes[minIndex]);
                }
                minIndex = j;
                updateDiv(divs[minIndex], div_sizes[minIndex], redGradient, div_sizes[minIndex]);

            } else {
                updateDiv(divs[j], div_sizes[j], blueGradient, div_sizes[j]);

            }

        }
        if (minIndex != i) {
            const temp = div_sizes[minIndex];
            div_sizes[minIndex] = div_sizes[i];
            div_sizes[i] = temp;
            updateDiv(divs[minIndex], div_sizes[minIndex], redGradient, div_sizes[minIndex]);
            updateDiv(divs[i], div_sizes[i], redGradient, div_sizes[i]);
            updateDiv(divs[minIndex], div_sizes[minIndex], blueGradient, div_sizes[minIndex]);
        }
        updateDiv(divs[i], div_sizes[i], greenGradient, div_sizes[i]);

    }
    updateDiv(divs[arraySize - 1], div_sizes[arraySize - 1], greenGradient, div_sizes[arraySize - 1]);

}