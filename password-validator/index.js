function validate() {
    let password = document.getElementById('password').value;
    let result = document.getElementById('result');
    let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(regex.test(password)) {
        result.innerHTML = "Strong";
        result.style.color = "#00cc66";
    } else {
        result.innerHTML = "Weak";
        result.style.color = "#f00";
    }
}