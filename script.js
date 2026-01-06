/* ========= DIGITAL CLOCK + DATE ========= */
let alarmTime = localStorage.getItem("alarmTime");

function updateClock() {
    let now = new Date();

    let h = String(now.getHours()).padStart(2, "0");
    let m = String(now.getMinutes()).padStart(2, "0");
    let s = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").innerHTML = `${h}:${m}:${s}`;
    checkAlarm(`${h}:${m}`);

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[now.getDay()];
    document.getElementById("date").innerHTML = `${day}, ${now.toDateString()}`;
}

setInterval(updateClock, 1000);
updateClock();

/* ========= ALARM ========= */
function setAlarm() {
    alarmTime = document.getElementById("alarmTime").value;
    if (alarmTime) {
        localStorage.setItem("alarmTime", alarmTime);
        alert("Alarm set for " + alarmTime);
    }
}

function checkAlarm(currentTime) {
    if (alarmTime === currentTime) {
        document.getElementById("alarmSound").play();
        alert("⏰ Alarm Ringing!");
        localStorage.removeItem("alarmTime");
        alarmTime = null;
    }
}

/* ========= STOPWATCH ========= */
let swSeconds = 0;
let swInterval = null;

function startStopwatch() {
    if (swInterval) return;
    swInterval = setInterval(() => {
        swSeconds++;
        let h = String(Math.floor(swSeconds / 3600)).padStart(2, "0");
        let m = String(Math.floor((swSeconds % 3600) / 60)).padStart(2, "0");
        let s = String(swSeconds % 60).padStart(2, "0");
        document.getElementById("stopwatch").innerHTML = `${h}:${m}:${s}`;
    }, 1000);
}

function stopStopwatch() {
    clearInterval(swInterval);
    swInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    swSeconds = 0;
    document.getElementById("stopwatch").innerHTML = "00:00:00";
}

/* ========= THEME ========= */
function toggleTheme() {
    document.querySelector(".container").classList.toggle("light");
}

/* ========= BACKGROUND ========= */
function changeBackground() {
    document.body.style.backgroundImage =
        `url("https://picsum.photos/1200/800?random=${Math.random()}")`;
}


