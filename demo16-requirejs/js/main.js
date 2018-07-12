require.config({
    paths: {
        "M1": "./M1",
        "M2": "./M2"

    }
});

console.log('this is main')

require(['M1', 'M2'], function (M1, M2) {
    console.log(M1)
    console.log(M2)

    document.write('<h1>' + M1.msg + '</h1>')
});