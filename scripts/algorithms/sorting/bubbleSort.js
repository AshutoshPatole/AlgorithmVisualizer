function BubbleSort() {
    cDelay = 0;
    for (let i = 0; i < arraySize - 1; i++) {
        let memory = window.performance.memory.usedJSHeapSize / 1000000;
        let delay = cDelay / 1000;
        time.push(delay);
        allAlgoSpeedResult[0] = delay;
        memoryUsage.push(memory);
        allAlgoMemoryUsage[0] = memory;
        for (var j = 0; j < (arraySize - i - 1); j++) {
            updateDiv(divs[j], div_sizes[j], yellowGradient);
            if (div_sizes[j] > div_sizes[j + 1]) {
                // let distance = Math.floor(divs[j].offsetLeft - divs[j + 1].offsetLeft);
                updateDiv(divs[j], div_sizes[j], redGradient);
                updateDiv(divs[j + 1], div_sizes[j + 1], redGradient);
                // [divs[j], divs[j + 1]] = [divs[j + 1], divs[j]];
                const temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;
                // console.log(`${divs[j].offsetLeft }    and     ${divs[j+1].offsetLeft }  ==> ${distance}`);

                updateDiv(divs[j], div_sizes[j], redGradient);
                updateDiv(divs[j + 1], div_sizes[j + 1], redGradient);
                // divs[j].style.transition = '';
                // divs[j].style.transform = "translate(" + (distance * 1) + "px)";
                // divs[j + 1].style.transition = '';
                // divs[j + 1].style.transform = "translate(" + (distance * -1) + "px)";
            }
            updateDiv(divs[j], div_sizes[j], blueGradient);

        }
        updateDiv(divs[j], div_sizes[j], greenGradient);

    }
    updateDiv(divs[0], div_sizes[0], greenGradient);
    enableButtons();
    xAxisCount();
}