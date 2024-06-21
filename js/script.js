function toggleLogInPage() {
    document.querySelectorAll('body>div').forEach(element => {
        element.classList.toggle('hidden');
    });
}
// Switching between login page and main page

var loginBox = document.querySelector('.log-in-box');
var inputUserId = document.getElementById('inputUserId');
var inputUserPassword = document.getElementById('inputUserPassword');
var alertModal = document.querySelector('.log-in-modal-wrapper');

setTimeout(function() {
    loginBox.classList.remove('log-in-box-leftside-full');  // Page loading animation
}, 300);
document.querySelector('.log-in-forgot-password').addEventListener('click', function(){ // Invoke Forgot password window
    document.querySelector('.log-in-box-rightside-forgot-password-wrapper').classList.add('log-in-box-rightside-forgot-password-wrapper-show');
});
document.querySelector('.log-in-forgot-password-btn-back').addEventListener('click', function(){ // Hide Forgot password window
    document.querySelector('.log-in-box-rightside-forgot-password-wrapper').classList.remove('log-in-box-rightside-forgot-password-wrapper-show');
});

function alertOnModal(string) {
    alertModal.classList.add('log-in-modal-wrapper-show');
    alertModal.children[0].children[0].textContent = string; // Replace popup text
}

document.querySelector('.log-in-button').addEventListener('click', function(e){ // Examine if the input boxes are empty.
    if(inputUserId.value.length == 0) { // ID
        alertOnModal('Enter Your ID.'); // Show alert box
        e.preventDefault();             // Prevent sending to server
    } else if(inputUserPassword.value.length == 0) { // Password
        alertOnModal('Enter Password.');
        e.preventDefault();
    }
});
document.querySelector('.log-in-forgot-password-button').addEventListener('click', function(e){
    if(inputUserEmail.value.length == 0) {
        alertOnModal('Enter Your Email.');
        e.preventDefault();
    }
});

document.querySelector('.log-in-modal-btn-close').addEventListener('click', function(){ // Close popup window
    alertModal.classList.remove('log-in-modal-wrapper-show');
});
