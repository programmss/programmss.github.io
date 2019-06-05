function start() {
    var r1 = document.getElementById('r1');
    var r2 = document.getElementById('r2');
    if (r1.checked) {
        document.location="xo.html";
    }
    else if (r2.checked) {
        document.location="xo1.html";
    }
}
function finish() {
    document.location = "index.html";
}