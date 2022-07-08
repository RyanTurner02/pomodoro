
document.getElementById("pomodoro-button").onclick = function () { changeTime(1500) };
document.getElementById("short-break-button").onclick = function () { changeTime(300) };
document.getElementById("long-break-button").onclick = function () { changeTime(600) };

document.getElementById("start-button").onclick = function () { startButtonClicked() };
document.getElementById("stop-button").onclick = function () { stopButtonClicked() };
document.getElementById("reset-button").onclick = function () { resetButtonClicked() };

let seconds = 1500; // 25 minutes
updateTimerText(getConvertedTime(seconds));

let timer = setInterval(countDown, 1000);

function startButtonClicked() { }
function stopButtonClicked() { }
function resetButtonClicked() { }

function changeTime(newSeconds) {
    updateTimerText(getConvertedTime(newSeconds));
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
