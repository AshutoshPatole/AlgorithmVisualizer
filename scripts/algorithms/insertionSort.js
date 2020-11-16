function InsertionSort() {
    cDelay = 0;
    for (let i = 1; i < arraySize; i++) {
        updateDiv(divs[i], div_sizes[i], yellowGradient);
        // let currentElement = div_sizes[i];
        for (let j = i; j > 0; j--) {
            if (div_sizes[i] < div_sizes[j]) {
                updateDiv(divs[j], div_sizes[i], redGradient);
                updateDiv(divs[j - 1], div_sizes[j - 1], redGradient);

                const temp = div_sizes[j];
                div_sizes[j] = div_sizes[j - 1];
                div_sizes[j - 1] = temp;
                updateDiv(divs[j], div_sizes[i], redGradient);
                updateDiv(divs[j - 1], div_sizes[j - 1], redGradient);
                // updateDiv(divs[j], div_sizes[j], blueGradient);

            }
        }
    }
    // updateDiv(divs[i], div_sizes[i], yellowGradient);
    // let currentElement = div_sizes[i];
    // let j = i - 1;
    // while (j > 0 && div_sizes[j] > currentElement) {
    //     updateDiv(divs[j], div_sizes[j], redGradient);
    //     updateDiv(divs[j + 1], div_sizes[j + 1], redGradient);

    //     div_sizes[j + 1] = div_sizes[j];

    // }

}