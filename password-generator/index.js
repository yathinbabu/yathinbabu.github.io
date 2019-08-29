alert("Instruction: Set the Length first and press Go");
    var password = document.getElementById("password");
    function passwordGen(len) { 
    var text = ""; 
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$%^&*-"; 
    for (var i = 0; i < len; i++) 
    text += charset.charAt(Math.floor(Math.random() * charset.length)); 
    return text; 
    }
    function setPassword() {
    var password = document.getElementById("password");
    var length = document.getElementById("number");
        password.value = passwordGen(length.value);
    }
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the password: " + copyText.value + " to clipboard.");
}