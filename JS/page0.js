const countdown = document.getElementById('countdown');

function updateCountdown() {
    const targetDate = new Date('April 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeDiff = targetDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    countdown.textContent = `Time remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeDiff < 0) {
        countdown.textContent = "It's April 1st! 🎉";
    }
}

setInterval(updateCountdown, 1000);
