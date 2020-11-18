function InsertionSort() {
    cDelay = 0;

    for (var j = 0; j < arraySize; j++) {
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
}

// for (let i = 1; i < arraySize; i++) {
//     updateDiv(divs[i], div_sizes[i], yellowGradient);
//     for (let j = i - 1; j > 0; j--) {
//         if (div_sizes[i] < div_sizes[j]) {
//             updateDiv(divs[j], div_sizes[i], redGradient);
//             updateDiv(divs[j - 1], div_sizes[j - 1], redGradient);

//             const temp = div_sizes[j];
//             div_sizes[j] = div_sizes[j - 1];
//             div_sizes[j - 1] = temp;
//             updateDiv(divs[j], div_sizes[i], redGradient);
//             updateDiv(divs[j - 1], div_sizes[j - 1], redGradient);
//             // updateDiv(divs[j], div_sizes[j], blueGradient);
//         }
//     }
// }