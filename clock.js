let is24HourFormat = true;  // Track current format

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  if (!is24HourFormat) {
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;  // Convert to 12-hour format and handle 0 as 12
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${period}`;
  } else {
    hours = String(hours).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
  }
}

function toggleTimeFormat() {
  is24HourFormat = !is24HourFormat;
  document.getElementById('toggle-button').textContent = is24HourFormat ? '12' : '24';
  updateClock();  // Update clock immediately when switching formats
}

function closeClock() {
  document.getElementById('clock-container').style.display = 'none';
}

// Initial clock setup and interval for updating time every second
setInterval(updateClock, 1000);
updateClock();  // Set the clock immediately on load