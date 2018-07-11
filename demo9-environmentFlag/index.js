let app = document.querySelector("#app");

let h1 = document.createElement("h1");

if (__DEV__) {
    h1.innerText = "Hello Demo9 environmentFlag DEV"
} else {
    h1.innerText = "Hello Demo9 environmentFlag"
}

app.appendChild(h1)