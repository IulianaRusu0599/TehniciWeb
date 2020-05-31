window.onload = function ChangeName(){
    var txt;
    var person = prompt("Cum te numesti?");

    let titluCurent = document.title;
    document.title="Salut " + person + "!";
    console.log(person)
    //dupa 2 secunde se schimba
    setTimeout(function(){   document.title = titluCurent;}, 5000);

}

const max_img = 5;
var nr = 1;
const images = [];

function clickImg() {
    if (nr <= max_img) {
        var btn = document.createElement("img");
        btn.setAttribute("src", images[nr + 1]);
        btn.setAttribute("width", "100");
        btn.setAttribute("height", "100");

        btn.addEventListener("click", () => {
            nr = nr - 1;
            btn.remove();
        });

        const cont = document.getElementsByClassName("cont")[0];
        cont.appendChild(btn);

        nr = nr + 1;
    }
}


function Functie1() {
    var d = new Date();
    d.setFullYear(2018, 9, 24);
    document.getElementById("demo").innerHTML = d;
}

function myFct() {
    document.getElementById("paragraf").style.backgroundColor = "#bed0ff";

}

function fActori() {

    var arr = ["In rolurile principale: ", " Rami Malek ", " Lucy Boynton ", " Gwilym Lee ", " Ben Hardy ", " Joe Mazzello "];
    var myJSON = JSON.stringify(arr);
    document.getElementById("actori").innerHTML = myJSON;

}

function Culoare() {
    var c = document.getElementById("text").children;
    let i;
    for (i = 0; i < c.length; i++) {
        c[i].style.backgroundColor = "#51aeff";
    }
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    document.getElementById("random").style.background = bgColor;
}


