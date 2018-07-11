const load = require('bundle-loader!./title.js');

load(function(module) {
    let app = document.querySelector("#app");
    let h1 = document.createElement("h1");
    h1.innerText = module.default;
    app.appendChild(h1)
});
