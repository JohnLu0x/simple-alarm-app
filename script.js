const timerInput = document.getElementById('timerInput');
const startButton = document.getElementById('startButton');
const countdownDisplay = document.getElementById('countdown');
const alarmMessage = document.getElementById('alarmMessage');

let intervalId; 

startButton.addEventListener('click', startTimer);

function startTimer() {
    let time = timerInput.value; 
    if (time) {
        let [minutes, seconds] = time.split(':').map(Number); 
        let totalSeconds = minutes * 60 + seconds;

        intervalId = setInterval(() => {
            totalSeconds--; 

            let newMinutes = Math.floor(totalSeconds / 60);
            let newSeconds = totalSeconds % 60;

            countdownDisplay.textContent = `${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;

            if (totalSeconds <= 0) {
                clearInterval(intervalId);
                alarmMessage.style.display = 'block'; 
            }
        }, 1000); 
    }
}
