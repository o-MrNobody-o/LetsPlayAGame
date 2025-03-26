var userAgree = document.getElementById('userAgree');
var userTime = document.getElementById('userTime');

userAgree.addEventListener('click', function() {
    var selectedDate = userTime.value;
    if (selectedDate) {
        var formLink = "https://docs.google.com/forms/d/e/1FAIpQLSdPZhvv13_1egQnTsM92NFgtJ-RxpaRofU1OOOG7DLj-BGiMQ/viewform?usp=pp_url&entry.788126238=" + selectedDate;
        window.open(formLink, "_blank");  // Opens the form in a new tab
    } else {
        alert("Please select a date first.");
    }
});
