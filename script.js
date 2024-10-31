let startTime, updatedTime, differnce, tInterval;
let Running = false;
let lapCount = 0;
let lapTimes = [];

const display = document.getElementById("display");
const laplist = document.getElementById("laplist");

document.getElementById("start").onclick = function() {
    if (!running){
        startTime = new Date().getTime() - (differnce || 0);
        tInterval = setInterval(updateTime, 10);
    }
}

document.getElementById("pause").onclick = function() {
    clearInterval(tInterval);
    running = false;
}

document.getElementById("reset").onclick = function() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    lapCount = 0;
    lapTimes = [];
    display.innerHTML = "00:00:00";
    lapList.innerHTMl = "";//Clear Lap Times
}

document.getElementById("lap").onclick = function() {
    if (running) {
        lapCount++;
        const lapTime = formatTime(difference);
        lapTimes.psuh(lapTime);
        const lapItem = document.createElement("li");
        lapItem.textContent = 'Lap$(lapCount): $(lapTime)';
        lapList.appendChild(lapTime);
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((difference % (1000 * 60)) / (1000));

    display.innerHTML = (hours <10 ? "0" + hours : hours) +":"+
                        (minutes <10 ? "0" + minutes : minutes) +":"+
                        (seconds <10 ? "0" + seconds : seconds);
}

function formatTime() {
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / (1000));
    return (hours < 10 ? "0" + hours : hours) +":"+
           (minutes < 10 ? "0" + minutes : minutes) +":"+ 
           (seconds < 10 ? "0" + seconds : seconds);
}
    
    
    
    
