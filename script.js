 // Trigger on page load for elements that might already be in view
    fadeElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
});
function updateClock() {
    const clockElement = document.getElementById('clock');

    const now = new Date();
    
    // Get the time in hours, minutes, and seconds
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Get the date (Day, Month, Year)
    const day = now.toLocaleDateString(undefined, { weekday: 'long' });
    const date = now.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' });

    // Set the inner HTML of the clock with two lines: one for date, one for time
    clockElement.innerHTML = `${day}, ${date} <br> ${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock display immediately
updateClock();
