
document.getElementById("pomodoro-button").onclick = function () { changeTime(1500) }; // 25 minutes
document.getElementById("short-break-button").onclick = function () { changeTime(300) }; // 5 minutes
document.getElementById("long-break-button").onclick = function () { changeTime(600) }; // 10 minutes

document.getElementById("start-button").onclick = function () { startButtonClicked() };
document.getElementById("stop-button").onclick = function () { stopButtonClicked() };
document.getElementById("reset-button").onclick = function () { resetButtonClicked() };

let initialSeconds = 1500; // 25 minutes
let seconds = 1500; // 25 minutes
let timer;

function startButtonClicked() {
    timer = setInterval(countDown, 1000);
}

function stopButtonClicked() {
    clearInterval(timer);
}

function resetButtonClicked() {
    seconds = initialSeconds;
    updateTimerText(getConvertedTime(seconds));
    clearInterval(timer);
}

function changeTime(newSeconds) {
    updateTimerText(getConvertedTime(newSeconds));
    initialSeconds = newSeconds;
    seconds = newSeconds;
}

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

    if (seconds < 10) {
        return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

function updateTimerText(newTime) {
    document.getElementById("timer").innerText = newTime;
}
