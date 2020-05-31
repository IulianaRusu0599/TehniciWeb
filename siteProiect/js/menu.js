// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += "responsive";
//     } else {
//         x.className = "topnav";
//     }
// }
//de facut butoane care imi coloreaza random paragrame
//buton care se deplaseaza
// parse
//sa se coloreze dupa un timp
//addEvent Listener de functie
//addEventListener("click", functie, captura)

// const culori = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
//     '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
//     '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
//     '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
//     '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
//     '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
//     '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
//     '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
//     '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
//     '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
//
//
// var colors = ['red', 'green', 'yellow', 'blue', 'orange'];
//
// window.onload = function random_bg_color() {
//
//     const cul = document.getElementsByClassName("culori");
//     for(let i= 0; i<cul.length; i++)
//         cul[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
//
//     }
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//
// function functie(){
//      var x = document.getElementById("BlueButton");
//      x.dist = 100;
//      x.style.left= parseInt("10");
//      setInterval(function(){ console.log("Hello!");}, 1000);
//      //x.onclick
//
//     // alert(x.style.border);
//     //
//     // var s = getComputedStyle(button, null);
//     // alert(s.border);
//     // x.style.border = s.border;
//
// }
//
// function Stop() {
//     clearInterval(x);
// }

function func1(event) {
    alert("DIV 1");
    if (document.getElementById("check").checked) {
        event.stopPropagation();
    }
}

function func2() {
    alert("DIV 2");
}

function f() {
    var text = '{"name":"Freddie Mercury", "birth":"1946-09-05", "death":"1991-11-24", "city":"Zanzibar"}';
    var obj = JSON.parse(text);
    obj.birth = new Date(obj.birth);
    document.getElementById("demo").innerHTML = obj.name + " s-a nascut pe " + obj.birth + " in " + obj.city;
}

function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked on quote " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}


function fun(event) {
    alert("DIV 1");
    if (document.getElementById("check").checked) {
        event.stopPropagation();
    }
}

// TASK NIVEL 2 ex 1


function test() {
    var y = document.getElementById("varsta-data");
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());

    var yearNow = now.getFullYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();
    var hourNow = now.getHours();
    var minuteNow = now.getMinutes();
    var secondNow = now.getSeconds();


    // //fragmentez stringul data nasterii --> an, luna, zi, ore, minute, secunde
    var data_nasterii = new Date(y.value.substring(6, 10), y.value.substring(3, 5) - 1, y.value.substring(0, 2), 0, 0, 0);

    var yearDN = data_nasterii.getFullYear();
    var monthDN = data_nasterii.getMonth();
    var dateDN = data_nasterii.getDate();
    var hourDN = data_nasterii.getHours();
    var minuteDN = data_nasterii.getMinutes();
    var secondDN = data_nasterii.getSeconds();

    var age = {};
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";
    var hourString = "";
    var minuteString = "";
    var secondString = "";


    yearAge = yearNow - yearDN;

    if (monthNow >= monthDN)
        var monthAge = monthNow - monthDN;
    else {
        yearAge--;
        var monthAge = 12 + monthNow - monthDN;
    }

    if (dateNow >= dateDN)
        var dateAge = dateNow - dateDN;
    else {
        monthAge--;
        var dateAge = 31 + dateNow - dateDN;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }

    if (hourNow >= hourDN)
        var hourAge = hourNow - hourDN;
    else {
        dateAge--;
        var hourAge = 24 + hourNow - hourDN;

        if (dateAge < 0) {
            dateAge = 31;
            monthAge--;
        }
    }


    if (minuteNow >= minuteDN)
        var minuteAge = minuteNow - minuteDN;
    else {
        hourAge--;
        var minuteAge = 60 + minuteNow - minuteDN;

        if (hourAge < 0) {
            hourAge = 23;
            dateAge--;
        }
    }


    if (secondNow >= secondDN)
        var secondAge = secondNow - secondDN;
    else {
        minuteAge--;
        var minuteAge = 60 + secondNow - secondDN;

        if (minuteAge < 0) {
            minuteAge = 59;
            hourAge--;
        }
    }


    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge,
        hours: hourAge,
        minutes: minuteAge,
        seconds: secondAge
    };


    if (age.years > 1) yearString = " ani";
    else yearString = " an";
    if (age.months > 1) monthString = " luni";
    else monthString = " luna";
    if (age.days > 1) dayString = " zile";
    else dayString = " zi";
    if (age.hours > 1) hourString = " ore";
    else hourString = " ora";
    if (age.minutes > 1) minuteString = " minute";
    else minuteString = " minut";
    if (age.seconds > 1) secondString = " secunde";
    else secondString = " secunda";
    ageString = age.years + yearString + ", " + age.months + monthString + ", " + age.days + dayString + ", " + age.hours + hourString + ", " + age.minutes + minuteString + " si " + age.seconds + secondString;


    if ((age.years > 0) && (age.months > 0) && (age.days > 0) && (age.hours > 0) && (age.minutes > 0) && (age.seconds > 0))
        ageString = age.years + yearString + ", " + age.months + monthString + ", " + age.days + dayString + ", " + age.hours + hourString + ", " + age.minutes + minuteString + " si " + age.seconds + secondString ;
    else if ((age.years == 0) && (age.months == 0) && (age.days == 0) && (age.hours == 0) && (age.minutes > 0))
        ageString = age.minutes + minuteString + " si " + age.seconds + secondString;
    else if ((age.years == 0) && (age.months == 0) && (age.days == 0) && (age.hours > 0))
        ageString = age.hours + hourString + ", " + age.minutes + minuteString + " si " + age.seconds + secondString;
    else if ((age.years == 0) && (age.months == 0) && (age.days > 0)) {
        if (age.hours == 0)
            ageString = age.days + dayString + ", " + age.minutes + minuteString + " si " + age.seconds + secondString;
        else
            ageString = age.days + dayString + ", " + age.hours + hourString + ", " + age.minutes + minuteString + " si " + age.seconds + secondString;
    }
    else if ((age.years == 0) && (age.months > 0) && (age.days == 0)) {
        if (age.hours == 0)
            ageString = age.months + monthString + ", " + age.minutes + minuteString + " si " + age.seconds + secondString;
        else
            ageString = age.months + monthString + age.hours + hourString + ", " + age.minutes + minuteString + " si " + age.seconds + secondString;
    }
    else if ((age.years == 0) && (age.months > 0) && (age.days > 0)) {
        if (age.hours == 0)
            ageString = age.months + monthString + age.days + dayString + ", " + age.minutes + minuteString + " si " + age.seconds + secondString;
        else
            ageString = age.months + monthString + age.days + dayString + ", " + age.hours + hourString + ", " + age.minutes + minuteString + " si " + age.seconds + secondString;
    }
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
        ageString = age.years + yearString + ", " + age.hours + hourString + ", " + age.minutes + minuteString + " si " + age.seconds + secondString + " Happy Birthday!!";

    else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) ){
        if (age.hours == 0)
            ageString = age.years + yearString + ", " + age.days + dayString + ", " + age.minutes + minuteString + " si " + age.seconds + secondString;
        else
            ageString = age.years + yearString + ", " + age.days + dayString + ", "+  age.hours + hourString + ", " + age.minutes + minuteString + " si " + age.seconds + secondString;
    }

    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) ) {
        if (age.hours == 0)
            ageString = age.years + yearString + ", " + age.months + monthString + " , "  + age.minutes + minuteString + " si " + age.seconds + secondString;
        else
            ageString = age.years + yearString + ", " + age.months + monthString + " , " + age.hours + hourString + ", " + age.minutes + minuteString + " si " + age.seconds + secondString;
    }
     else ageString = "Oops! Could not calculate age!";

    document.getElementById("demo1").innerHTML =ageString;

}
