let prevOp = document.querySelector('.prev-op');
let op = document.querySelector('.op');
let curOp = document.querySelector('.cur-op');
let numBtn = document.querySelectorAll('.num-btn');
let numOp = document.querySelectorAll('.num-op');

numBtn.forEach((button) => {
    button.addEventListener('click', (e) =>{
        addToDisplay(e);
    });
})
numOp.forEach((button) => {
    button.addEventListener('click', (e) =>{
        getOperator(e);
    });
})

function clear(){
    op.textContent = '';
    curOp.textContent = '';
    prevOp.textContent = '';
}
function getOperator(e){
    if(prevOp.textContent === ``){
        prevOp.textContent = curOp.textContent;
        curOp.textContent = ``;
    }
    operator = e.target.innerText;
    op.textContent = operator;
}
function addToDisplay(e){
    let dis = e.target.innerText;
    curOp.textContent += `${dis}`;
}
function operate(){
    if(operator  !== ``){
        num2 = prevOp.textContent;
        num = curOp.textContent;
        switch(operator){
            case '+':
                num = parseFloat(num2) + parseFloat(num);
                break;
            case '-':
                num = parseFloat(num2) - parseFloat(num);
                break;
            case 'x':
                num = parseFloat(num2) * parseFloat(num);
                break;
            case '÷':
                num = parseFloat(num2) / parseFloat(num);
                break;
            default:
                return
        }
        operator = ``;
        prevOp.textContent = ``;
        op.textContent = ``;
        curOp.textContent = `${num}`;
    }else{
        prevOp.textContent = curOp.textContent;
        curOp.textContent = ``;
    }
}

let btnClear = document.querySelector('.btn-clear');
btnClear.addEventListener('click', () => {
    clear();
} );

let btnCE = document.querySelector('.btn-ce');
btnCE.addEventListener('click', () => {curOp.textContent = ``;});