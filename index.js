// Nav bar function
function myFunction() {
  var x = document.getElementById("nav-bar");
  if (x.className === "nav-bar") {
    x.className += " responsive";
    x.style.backgroundColor = '#000';
  } else {
    x.className = "nav-bar";
  }
}

// Article nav bar
function myArticleFunction() {
  var x = document.getElementById("privacy-policy-nav-bar");
  if (x.className === "privacy-policy-nav-bar") {
    x.className += " responsive";
    x.style.backgroundColor = '#000';
  } else {
    x.className = "privacy-policy-nav-bar";
  }
}