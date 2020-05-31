window.onload = function onLoad() {

    let anchors = document.querySelectorAll('.content .bio .band-artists nav a');
    let nrEl = anchors.length;


    for (let i = 0; i < nrEl; i++) {
        anchors[i].addEventListener("mouseover", () => {
            anchors[i].style.fontSize = '30px';
        });

        anchors[i].addEventListener("mouseout", () => {
            anchors[i].style.fontSize = '24px';
        });
    }

    let picQueen = document.getElementById('queen-pic');

    picQueen.onclick = function () {
        window.open('http://www.queenonline.com/', '_blank');
    };


};



function FCT() {
    //array
    var sir1 = ["Freddie"];
    var sir2 = [" Brian", " John", " Mike", " Roger"];
    var sir = sir1.concat(sir2);
    document.getElementById("demo").innerHTML = sir;
}
function myFct(event){
    let x = event.key;
    if (x == "a" || x == "A") {
        alert ("Ai apasat 'a' sau 'A'");
    }

}
function myFunction() {
    document.getElementById("cantareti").className = "mystyle";
}

function myFunction1() {
    var element = document.getElementById("text");
    element.classList.add("info");
}
