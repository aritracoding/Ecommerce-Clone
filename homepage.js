var carValue = 1;
console.log('load')
uiRender(carValue);

function carLeft() {
    --carValue;
    uiRender(carValue);
}
function carRight() {
    ++carValue;
    uiRender(carValue);
}

function uiRender(param) {
    if (param == 1) {
        var first = document.querySelector('.first');
        var second = document.querySelector('.second');
        second.style.display = 'none';
        first.style.display = 'flex';
    } else if (param == 2) {
        var second = document.querySelector('.second');
        var first = document.querySelector('.first');
        first.style.display = 'none';
        second.style.display = 'flex';
        

    }
}