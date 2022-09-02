
let timer = document.querySelector("#timer")
let btnStart = document.querySelector("#start-button");
let btnStop = document.querySelector("#stop-button");
let btnReset = document.querySelector("#reset-button");
let timeMinute = 0;
let timeSecond = 0;
let timeMilliSecond = 0;






btnStart.addEventListener("click", (event) => {
    btnStart.disabled = true;
    btnStop.disabled = false;
    btnReset.disabled = true;
    var _tick = setInterval(function () {
        timeMilliSecond++;

        if (timeMilliSecond == 99) {
            timeMilliSecond = 00;
            timeSecond++;
        }
        if (timeSecond == 59) {
            timeSecond = 00;
            timeMinute++;
        }
        let san = timeSecond < 10 ? "0" + timeSecond : timeSecond
        let min = timeMinute < 10 ? "0" + timeMinute : timeMinute
        let minSan = timeMilliSecond < 10 ? "0" + timeMilliSecond : timeMilliSecond
        timer.innerHTML = min + ":" + san + ":" + minSan +"0";
    }, 10)
    btnReset.addEventListener("click", (event) => {
        timeMinute = 0;
        timeSecond = 0;
        timeMilliSecond = 0;
        timer.innerHTML = "00:00:00";
        btnReset.disabled = true;
        clearInterval(_tick)
    })
    btnStop.addEventListener("click", (event) => {
        btnStop.disabled = true;
        btnReset.disabled = false;
        btnStart.disabled = false;
        clearInterval(_tick)
    })

})
