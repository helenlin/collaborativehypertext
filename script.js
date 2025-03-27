const timerDisplay = document.getElementById("timerDisplay");
const totalSeconds = 10800; 
const STORAGE_KEY = "accessStartTime";

function formatTime(s) {
  const hrs = Math.floor(s / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const secs = s % 60;
  return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function expireAccess() {
  document.body.innerHTML = `
    <h1>Access Expired</h1>
    <p>Your 3-hour access window has ended.</p>
  `;
}

function startCountdown() {
  let startTime = localStorage.getItem(STORAGE_KEY);

  if (!startTime) {
    startTime = Date.now();
    localStorage.setItem(STORAGE_KEY, startTime);
  } else {
    startTime = parseInt(startTime);
  }

  const timer = setInterval(() => {
    const now = Date.now();
    const elapsed = Math.floor((now - startTime) / 1000);
    const remaining = totalSeconds - elapsed;

    if (remaining <= 0) {
      clearInterval(timer);
      expireAccess();
    } else {
      timerDisplay.textContent = `Time left: ${formatTime(remaining)}`;
    }
  }, 1000);
}

window.addEventListener("load", () => {
  const startTime = localStorage.getItem(STORAGE_KEY);
  const now = Date.now();
  if (startTime && (now - parseInt(startTime)) >= totalSeconds * 1000) {
    expireAccess(); 
  } else {
    startCountdown(); 
  }
});


const bird = document.getElementById("bird");


function showBirdTemporarily() {
  console.log("Bird should appear now"); 
  bird.style.display = "block"; 
  setTimeout(() => {
    bird.style.display = "none"; 
    console.log("Bird disappeared"); 
  }, 3000);
}

setInterval(showBirdTemporarily, 30000);

showBirdTemporarily();



const flow = document.getElementById("flow");


function showFlowTemporarily() {
console.log("flow should appear now"); 
flow.style.display = "block"; 
setTimeout(() => {
flow.style.display = "none"; 
console.log("flow disappeared"); 
}, 3000);
}

setInterval(showFlowTemporarily, 30000);

showFlowTemporarily();

