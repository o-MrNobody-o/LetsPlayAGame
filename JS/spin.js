const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const goNext = document.getElementById('goNext');

spinBtn.addEventListener('click', spinWheel);

function spinWheel() {
    
    const randomPercentage = (Math.random() * 2 + 98).toFixed(2); 
    const randomDegree = Math.floor(Math.random() * 360) + 3600; 
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    setTimeout(() => {
        wheel.textContent = `${randomPercentage}%`;
    }, 4000); 
}

goNext.addEventListener('click', gofinal);
function gofinal ()
{
    window.location.href = 'page3.html'
}
