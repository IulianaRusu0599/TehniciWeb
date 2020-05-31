let liEls = document.querySelectorAll('.carousel .images .img');
let index = 0;

window.show = function(increase) {
    const nrEl = liEls.length;
    console.log('increase =' + increase);
    console.log('elem: ' + nrEl);

    let newIndex = index + increase;
    console.log('new ind:' + newIndex);

    if (newIndex < 0) {
        index = nrEl - 1;
    } else if (newIndex > nrEl - 1) {
        index = 0;
    } else {
        index = newIndex;
    }

    console.log('final i ' + index);

    // reset
    for (let i = 0; i < nrEl; i++) {
        liEls[i].className = 'img';
    }

    liEls[index].className='img show';
};
window.onload= function () {
    setInterval(function () {
        console.log("apel");
        show(1);
    }, 2000)
};