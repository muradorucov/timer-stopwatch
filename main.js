
let timer = document.querySelector("#timer")
let btnStart = document.querySelector("#start-button");
let btnStop = document.querySelector("#stop-button");
let btnReset = document.querySelector("#reset-button");
let timeMinute = 0;
let timeSecond = 0;
let timeminsecond = 0;






btnStart.addEventListener("click", (event) => {

    btnStart.removeAttribute('disabled')
    btnStop.disabled = false
    btnReset.disabled = false
    var _tick = setInterval(function () {
        timeminsecond++;

        if (timeminsecond == 999) {
            timeminsecond = 00;
            timeSecond++;
        }
        if (timeSecond == 59) {
            timeminsecond = 00;
            timeMinute++;
        }
        if (timeSecond < 10) {
            let san = ":0" + timeSecond;
        }
        let san = timeSecond < 10 ? "0" + timeSecond : timeSecond
        let min = timeMinute < 10 ? "0" + timeMinute : timeMinute
        let minSan = timeminsecond < 10 ? "0" + timeminsecond : timeminsecond
        timer.innerHTML = min + ":" + san + ":" + minSan;
    }, 1)
    btnReset.addEventListener("click", (event) => {
        timer.innerHTML = "00:00:00";
        btnStop.disabled = true;
        btnReset.disabled = true;
        clearInterval(_tick)
    })
    btnStop.addEventListener("click", (event) => {
        btnStop.disabled = true;
        clearInterval(_tick)
    })

})
