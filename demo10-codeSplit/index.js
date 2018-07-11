// require.ensure(['./title'], (require) => {
//     let title = require('./title')

//     let app = document.querySelector("#app");
//     let h1 = document.createElement("h1");
//     h1.innerText = title
//     app.appendChild(h1)
// }, 'title')

require.ensure(['./title'], function (require) {
    import('./title').then(module => {
        let app = document.querySelector("#app");
        let h1 = document.createElement("h1");
        h1.innerText = module.default;
        app.appendChild(h1)
    })
});


