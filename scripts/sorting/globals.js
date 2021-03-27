const greenGradient = "linear-gradient(to bottom right, #20BF55, #01BAEF)";
const redGradient = "linear-gradient(to bottom right, #A40606, #D98324)";
const yellowGradient = "linear-gradient(to bottom right, #FFDD00, #FBB034)";
const blueGradient = "linear-gradient(to bottom right, #3859B2, #D23FF6)";

function toast(algorith, time, space) {
    let timeToFinish = `Time: ${time} Space : ${space} `;
    tata.success(algorith, timeToFinish, {
        duration: 10000,
        position: 'br',
        animate: 'slide'
    });
}
function checkBrowserToast(status, message) {
    status == "Error" ? tata.error(status, message, {
        duration: 10000,
        position: 'br',
        animate: 'slide'
    }) : tata.success(status, message, {
        duration: 10000,
        position: 'br',
        animate: 'slide'
    });
}