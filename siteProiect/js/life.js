window.onload = function onLoad() {

    const articles = document.getElementsByTagName("article");
    for(let i=0; i<articles.length; i++)
    {
        articles[i].style.animation="animateleft 0.4s";
        // articles[i].style.animationDelay="1s";

    }
    console.log("articol"+ articles.length);


}
// var myVar;
// function  Functie() {
//  myVar = setInterval(function(){ alert("Hello!");}, 5000);
// }
//
// function myStopFunction() {
//     clearInterval(myVar);
// }
//
// window.onload = function(){
//     var obj1 = JSON.parse('{"firstName":"Maria","lastName": "Doe"}');
//     document.getElementById("obiect").innerHTML = obj1.firstName;
// }
// localStorage
// window.onload = function(){
//     var txt = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
//     var obj = JSON.parse(txt);
//     obj.birth = new Date(obj.birth);
//     document.getElementById("persoana").innerHTML = obj.name + ", " + obj.birth;
// }
// pt examen C5-C8 js
//C9 - C11 json node xml
//in proiect url
//cerere - raspuns
//formulare---form js references
function myFunction() {
    document.getElementById("myText").value = "Freddie Mercury";
}

window.onload = function BackColor(){
    var elem = document.getElementById("paragraf");
    var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    document.getElementById("demo").innerHTML = theCSSprop;
}