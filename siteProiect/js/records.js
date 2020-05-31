window.onload = function () {
    console.log("if-->");
    if (localStorage.fontSizePar) {
        console.log("hello");
        document.getElementById("art1").style.fontSize = localStorage.fontSizePar;

        //ultima valoare selectata
        var select = document.getElementById("disc");
        for (var i = 0; i < select.options.length; i++) {
            if (select.options[i].value === localStorage.fontSizePar) {
                select.options[i].selected = true;
            }
        }
    }
};


document.getElementById("myP1").addEventListener("click", function () {
    alert("Freddie Mercury");
}, false);

document.getElementById("myDiv1").addEventListener("click", function () {
    alert("Fost muzician, compozitor și textier britanic, vocalist al formației britanice de muzică rock Queen");
}, false);

document.getElementById("myP2").addEventListener("click", function () {
    alert("Freddie Mercury");
}, true);

document.getElementById("myDiv2").addEventListener("click", function () {
    alert("Fost muzician, compozitor și textier britanic, vocalist al formației britanice de muzică rock Queen");
}, true);

var myVar = setInterval(setColor, 2000);

function setColor() {
    var x = document.body;
    x.style.backgroundColor = x.style.backgroundColor === "silver" ? "LightGrey" : "silver";
}

function stopColor() {
    clearInterval(myVar);
}

function check() {
    document.getElementById("red").checked = true;
}

function uncheck() {
    document.getElementById("red").checked = false;
}


function changeFont(value) {
    console.log("lala");
    localStorage.fontSizePar = value;
    document.getElementById("art1").style.fontSize = localStorage.fontSizePar;

}

function resetare(){
    document.getElementById("disc").options[0].selected=true; //schimba valoarea
    changeFont("10px"); // schimba dimensiunea fontului
}