const calculCuv = function (mainId, id) {
    console.log("calc");
    let length = document.getElementById(mainId).innerText.trim().split(/\s/).length;

    document.getElementById(id).innerHTML = length - 1; // - 1 pt ca incepe de la 0
};