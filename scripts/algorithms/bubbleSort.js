function BubbleSort() {
    cDelay = 0;
    for (let i = 0; i < arraySize - 1; i++) {
        for (var j = 0; j < (arraySize - i - 1); j++) {
            updateDiv(divs[j], div_sizes[j], "linear-gradient(to bottom right, #FFDD00, #FBB034)", div_sizes[j]);

            if (div_sizes[j] > div_sizes[j + 1]) {
                updateDiv(divs[j], div_sizes[j], "linear-gradient(to bottom right, #A40606, #D98324)", div_sizes[j]);
                updateDiv(divs[j + 1], div_sizes[j + 1], "linear-gradient(to bottom right, #A40606, #D98324)", div_sizes[j + 1]);
                // [divs[j], divs[j + 1]] = [divs[j + 1], divs[j]];
                let temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;
                updateDiv(divs[j], div_sizes[j], "linear-gradient(to bottom right, #A40606, #D98324)", div_sizes[j]);
                updateDiv(divs[j + 1], div_sizes[j + 1], "linear-gradient(to bottom right, #A40606, #D98324)", div_sizes[j + 1]);
            }
            updateDiv(divs[j], div_sizes[j], "linear-gradient(to bottom right, #3859B2, #D23FF6)", div_sizes[j]);

        }
        updateDiv(divs[j], div_sizes[j], "linear-gradient(to bottom right, #20BF55, #01BAEF)", div_sizes[j]);

    }
    updateDiv(divs[0], div_sizes[0], "linear-gradient(to bottom right, #20BF55, #01BAEF)", div_sizes[0]);

}