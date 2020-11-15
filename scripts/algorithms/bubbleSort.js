function BubbleSort() {
    cDelay = 0;
    for (let i = 0; i < arraySize - 1; i++) {
        for (var j = 0; j < (arraySize - i - 1); j++) {
            updateDiv(divs[j], div_sizes[j], yellowGradient, div_sizes[j]);

            if (div_sizes[j] > div_sizes[j + 1]) {
                updateDiv(divs[j], div_sizes[j], redGradient, div_sizes[j]);
                updateDiv(divs[j + 1], div_sizes[j + 1], redGradient, div_sizes[j + 1]);
                // [divs[j], divs[j + 1]] = [divs[j + 1], divs[j]];
                let temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;
                updateDiv(divs[j], div_sizes[j], redGradient, div_sizes[j]);
                updateDiv(divs[j + 1], div_sizes[j + 1], redGradient, div_sizes[j + 1]);
            }
            updateDiv(divs[j], div_sizes[j], blueGradient, div_sizes[j]);

        }
        updateDiv(divs[j], div_sizes[j], greenGradient, div_sizes[j]);

    }
    updateDiv(divs[0], div_sizes[0], greenGradient, div_sizes[0]);

}