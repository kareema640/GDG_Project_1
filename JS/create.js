var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var value = document.getElementById("contact-email").value.trim();
    if (value.length === 0) {
        emailError.innerHTML = 'Email or Phone is required';
        return false;
    }
    var isEmail = value.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
    var isPhone = value.match(/^01[0-9]{9}$/);
    if (!isEmail && !isPhone) {
        emailError.innerHTML = 'Enter a valid email or Egyptian phone number';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePassword() {
    var password = document.getElementById("contact-password").value;
    if (password.length === 0) {
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    if (password.length < 6) {
        passwordError.innerHTML = 'Password must be at least 6 characters';
        return false;
    }
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    var valid = validateName() & validateEmail() & validatePassword();
    if (!valid) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors to submit';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }
    return true;
}