let intervalId;
const numberDisplay = document.getElementById('number-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const speedInput = document.getElementById('speed');

// Función para generar un número aleatorio entre 00 y 100
function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 101); // Números entre 0 y 100
  numberDisplay.textContent = randomNumber.toString().padStart(2, '0'); // Formato 00
}

// Iniciar el generador de números
startBtn.addEventListener('click', () => {
  const speed = parseInt(speedInput.value);
  if (!intervalId) {
    intervalId = setInterval(generateRandomNumber, speed);
  }
});

// Detener el generador de números
stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
});
