const startEl = document.querySelector("#start");
const stopEl = document.querySelector("#stop");
const resetEl = document.querySelector("#reset");
const time = document.querySelector("#timer");
let timeLeft = 6;
let intervalId;
const handleStartClick = ()=>{
    intervalId = setInterval(() => {
        console.log("Timer is running");
        if (timeLeft <=0){
            clearInterval(intervalId)
            console.log("Timer is finished");
            return;
        }
        timeLeft--
        const minutes = Math.floor(timeLeft/60)
        const seconds = Math.floor(timeLeft%60)
        time.textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
    }, 1000);
}
startEl.addEventListener("click",handleStartClick)
const handleStopClick = ()=>{

}
stopEl.addEventListener("click",handleStopClick)
const handleResetClick = ()=>{

}
resetEl.addEventListener("click",handleResetClick)