let app = document.querySelector("#app");

let h1 = document.createElement("h1");
h1.innerText = "Hello Demo5 Img"

app.appendChild(h1)

let img = document.createElement("img");
img.src = require("./bye.jpeg");
app.appendChild(img);

