const binc = document.getElementById("increment")
const brst = document.getElementById("reset")
const bdec = document.getElementById("decrement")

var c=0;
const counter = document.getElementById("count")

binc.onclick = function() {
    c++;
    counter.innerHTML = c;
};

brst.onclick = function() {
    c=0;
    counter.innerHTML = c;
};

bdec.onclick = function() {
    c--;
    counter.innerHTML = c;
};
