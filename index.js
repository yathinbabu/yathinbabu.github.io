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

// Fetch data from blog-data.json
fetch('blog-data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    createBlogCard(data);
  })
  .catch(function(err) {
    console.log('error: ' + err);
  });

//Function to create blog article cards in home page
function createBlogCard(data) {
  var container = document.getElementById("blog");
  for(var i = data.length - 1; i >= 0; i--) {
    var a = document.createElement("a");
    a.href = data[i].url;
    var div = document.createElement("div");
    div.classList.add("article");
    a.appendChild(div);
    var divLeft = document.createElement("div");
    var divRight = document.createElement("div");
    divLeft.classList.add("left");
    divRight.classList.add("right");
    var img = document.createElement("img");
    img.src = data[i].imgUrl;
    divLeft.appendChild(img);
    var span = document.createElement("span");
    span.classList.add("type");
    var category = document.createTextNode(data[i].category);
    span.appendChild(category);
    var h1 = document.createElement("h1");
    h1.classList.add("heading");
    var title = document.createTextNode(data[i].title);
    h1.appendChild(title);
    var p = document.createElement("p");
    p.classList.add("intro");
    var description = document.createTextNode(data[i].description);
    p.appendChild(description);
    var spanDate = document.createElement("span");
    spanDate.classList.add("date");
    var date = document.createTextNode(data[i].date);
    spanDate.appendChild(date);
    divRight.appendChild(span);
    divRight.appendChild(h1);
    divRight.appendChild(p);
    divRight.appendChild(spanDate);
    div.appendChild(divLeft);
    div.appendChild(divRight);
    container.appendChild(a);
  }
}