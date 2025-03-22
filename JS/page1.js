var username2 = document.getElementById('username2');

var userbtn2 = document.getElementById('userbtn2');

userbtn2.addEventListener('click',submitting)

function submitting ()
{  
    if (username2.value.toLowerCase() === 'cupcake')
    {
        window.location.href = 'page0.html'
    }
    else
    {
        alert("You mistyped your nickname remember it's only for you Try again!")
    }
}