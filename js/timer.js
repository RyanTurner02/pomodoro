
let seconds = 1500; // 25 minutes
updateTimerText(getConvertedTime(seconds));

let timer = setInterval(countDown, 1000);

function countDown() {
    if (seconds-- <= 0) {
        clearInterval(timer);
        return;
    }
    updateTimerText(getConvertedTime(seconds));
}

function getConvertedTime(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if(seconds < 10) {
        return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

function updateTimerText(newTime) {
    document.getElementById("timer").innerText = newTime;
}
