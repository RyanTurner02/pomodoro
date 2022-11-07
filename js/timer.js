
document.getElementById("pomodoro-button").onclick = function () { resetTitleText(); changeTime(1500); stopButtonClicked(); }; // 25 minutes
document.getElementById("short-break-button").onclick = function () { resetTitleText(); changeTime(300); stopButtonClicked(); }; // 5 minutes
document.getElementById("long-break-button").onclick = function () { resetTitleText(); changeTime(600); stopButtonClicked(); }; // 10 minutes

document.getElementById("start-button").onclick = function () { startButtonClicked() };
document.getElementById("stop-button").onclick = function () { stopButtonClicked() };
document.getElementById("reset-button").onclick = function () { resetButtonClicked() };

let initialSeconds = 1500; // 25 minutes
let seconds = 1500; // 25 minutes
let timer;

let timerHasStarted = false;

let finishedAlarm = new Audio("../audio/alarm_clock.ogg");

function startButtonClicked() {
    if (seconds <= 0) {
        return;
    }

    if (!timerHasStarted) {
        timer = setInterval(countDown, 1000);
        timerHasStarted = true;
    }
}

function stopButtonClicked() {
    clearInterval(timer);
    timerHasStarted = false;
}

function resetButtonClicked() {
    seconds = initialSeconds;
    updateTimerText(getConvertedTime(seconds));
    resetTitleText();
    clearInterval(timer);
    timerHasStarted = false;
}

function changeTime(newSeconds) {
    updateTimerText(getConvertedTime(newSeconds));
    initialSeconds = newSeconds;
    seconds = newSeconds;
}

function countDown() {
    if (seconds-- <= 0) {
        finishedAlarm.play();
        clearInterval(timer);
        timerHasStarted = false;
        return;
    }
    updateTimerText(getConvertedTime(seconds));
    updateTitleText(getConvertedTime(seconds));
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

function resetTitleText() {
    document.title = "Pomodoro Timer";
}

function updateTitleText(newTime) {
    document.title = `(${newTime})` + " - Pomodoro Timer";
}

let darkModeButton = document.getElementById("mode-toggler");
darkModeButton.addEventListener("click", toggleDarkMode);

function toggleDarkMode(event) {
    document.body.classList.toggle("dark-mode");
}
