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
    console.log('render',param);
    if (param == 1) {
        var first = document.querySelectorAll('.first');
        var second = document.querySelectorAll('.second');
        for (var i=0;i<first.length;i+=1){
            first[i].style.display = 'flex';
            second[i].style.display = 'none'
        }
    } else if (param == 2) {
        var second = document.querySelectorAll('.second');
        var first = document.querySelectorAll('.first');
        for (var i=0;i<first.length;i+=1){
            first[i].style.display = 'none';
            second[i].style.display = 'flex'
        }
    }
}


function register(){
    window.location.href = './signUp.html';
}
function login(){
    window.location.href = './signIn.html';
}