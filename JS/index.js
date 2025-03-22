var username1 = document.getElementById('username1');

var userbtn1 = document.getElementById('userbtn1');

userbtn1.addEventListener('click',submitting)

function submitting ()
{  
    if (username1.value.toLowerCase() === 'abir')
    {
        window.location.href = 'Pages/page1.html'
    }
    else
    {
        alert("You're either not welcome here or you mistyped your name. Try again!")
    }
}