for (let i=0; i<9; i++) {
 document.getElementById('game').innerHTML +='<div class="block"></div>';   
}

let n = 1;
let nkomp = 1;
let res;
let num = 0;

let resultField = document.getElementById('result');

document.getElementById('game').onclick = function (event) {
    if (event.target.innerHTML) return false;
    if (event.target.className == 'block') {
        event.target.innerHTML = 'X';
        result();
        console.log(n);
        komp();
        n++;
        if ((n===6) && (!resultField.innerHTML)) {
            resultField.innerHTML='НИЧЬЯ';
        }
    } 
}
    
 console.log(n); 

document.getElementById('restart').onclick = ()=>location.reload();
    

//n - номер хода 

let arr = document.getElementsByClassName('block');
function komp () {
    if (n ==1 ) {
        if (!arr[4].innerHTML) {
            arr[4].innerHTML = '0';  
        } else {
            arr[2].innerHTML = '0';
        }
    } else if (n==2) {
        checkPotLose();
        step();
        if (nkomp == 1) {
            randomStep();
         }
    } else if (n==3) {
        checkPotWin();
        step();
        checkPotLose();
        if (nkomp<3) {
            step();
        }
        if (nkomp<3) {
            randomStep();
        }
        result();
        if (nkomp == 2) {
            randomStep();
        }
    } else if (n==4) {
        checkPotWin();
        step();
        checkPotLose();
        step();
        result();
        if (nkomp == 3) {
            randomStep();
        }
    }
}

let check = [];
let a;
for (let i = 0;i<20;i++) {
    check[i]=false;
}

function step (){
    a = check.indexOf(true,0);
    if (a!=-1) {
        nkomp++;
        if (a == 0) {
            arr[2].innerHTML = '0';
            return;
        }
        if (a == 1) {
            arr[0].innerHTML = '0';
            return;
        }
        if (a == 2) {
            arr[5].innerHTML = '0';
            return;
        }
        if (a == 3) {
            arr[3].innerHTML = '0';
            return;
        }
        if (a == 4) {
            arr[8].innerHTML = '0';
            return;
        }
        if (a == 5) {
            arr[6].innerHTML = '0';
            return;
        }
        if (a == 6) {
            arr[6].innerHTML = '0';
            return;
        }
        if (a == 7) {
            arr[0].innerHTML = '0';
            return;
        }
        if (a == 8) {
            arr[7].innerHTML = '0';
            return;
        }
        if (a == 9) {
            arr[1].innerHTML = '0';
            return;
        }
        if (a == 10) {
            arr[8].innerHTML = '0';
            return;
        }
        if (a == 11) {
            arr[2].innerHTML = '0';
            return;
        }
        if (a == 12) {
            arr[8].innerHTML = '0';
            return;
        }
        if (a == 13) {
            arr[0].innerHTML = '0';
            return;
        }
        if (a == 14) {
            arr[6].innerHTML = '0';
            return;
        }
        if (a == 15) {
            arr[2].innerHTML = '0';
            return;
        }
        if (a == 16) {
            arr[3].innerHTML = '0';
            return;
        }
        if (a == 17) {
            arr[5].innerHTML = '0';
            return;
        }
        if (a == 18) {
            arr[1].innerHTML = '0';
            return;
        }
        if (a == 19) {
            arr[8].innerHTML = '0';
            return;
        }
    }
}


function checkPotWin () {
    check[0] = ((arr[0].innerHTML == '0') && (arr[1].innerHTML == '0') && (!arr[2].innerHTML))?true:false;
    check[1] = ((arr[1].innerHTML == '0') && (arr[2].innerHTML == '0') && (!arr[0].innerHTML))?true:false;
    check[2] = ((arr[3].innerHTML == '0') && (arr[4].innerHTML == '0') && (!arr[5].innerHTML))?true:false;
    check[3] = ((arr[4].innerHTML == '0') && (arr[5].innerHTML == '0') && (!arr[3].innerHTML))?true:false;
    check[4] = ((arr[6].innerHTML == '0') && (arr[7].innerHTML == '0') && (!arr[8].innerHTML))?true:false;
    check[5] = ((arr[7].innerHTML == '0') && (arr[8].innerHTML == '0') && (!arr[6].innerHTML))?true:false;
    
    check[6] = ((arr[0].innerHTML == '0') && (arr[3].innerHTML == '0') && (!arr[6].innerHTML))?true:false;
    check[7] = ((arr[3].innerHTML == '0') && (arr[6].innerHTML == '0') && (!arr[0].innerHTML))?true:false;
    check[8] = ((arr[1].innerHTML == '0') && (arr[4].innerHTML == '0') && (!arr[7].innerHTML))?true:false;
    check[9] = ((arr[4].innerHTML == '0') && (arr[7].innerHTML == '0') && (!arr[1].innerHTML))?true:false;
    check[10] = ((arr[2].innerHTML == '0') && (arr[5].innerHTML == '0') && (!arr[8].innerHTML))?true:false;
    check[11] = ((arr[5].innerHTML == '0') && (arr[8].innerHTML == '0') && (!arr[2].innerHTML))?true:false;
    
    check[12] = ((arr[0].innerHTML == '0') && (arr[4].innerHTML == '0') && (!arr[8].innerHTML))?true:false;
    check[13] = ((arr[4].innerHTML == '0') && (arr[8].innerHTML == '0') && (!arr[0].innerHTML))?true:false;
    check[14] = ((arr[2].innerHTML == '0') && (arr[4].innerHTML == '0') && (!arr[6].innerHTML))?true:false;
    check[15] = ((arr[4].innerHTML == '0') && (arr[6].innerHTML == '0') && (!arr[2].innerHTML))?true:false;
    check[16] = ((arr[0].innerHTML == '0') && (arr[6].innerHTML == '0') && (!arr[3].innerHTML))?true:false;
    check[17] = ((arr[2].innerHTML == '0') && (arr[8].innerHTML == '0') && (!arr[5].innerHTML))?true:false;
    check[18] = ((arr[0].innerHTML == '0') && (arr[2].innerHTML == '0') && (!arr[1].innerHTML))?true:false;
    check[19] = ((arr[6].innerHTML == '0') && (arr[7].innerHTML == '0') && (!arr[8].innerHTML))?true:false;
    
}

function checkPotLose () {
    check[0] = ((arr[0].innerHTML == 'X') && (arr[1].innerHTML == 'X') && (!arr[2].innerHTML))?true:false;
    check[1] = ((arr[1].innerHTML == 'X') && (arr[2].innerHTML == 'X') && (!arr[0].innerHTML))?true:false;
    check[2] = ((arr[3].innerHTML == 'X') && (arr[4].innerHTML == 'X') && (!arr[5].innerHTML))?true:false;
    check[3] = ((arr[4].innerHTML == 'X') && (arr[5].innerHTML == 'X') && (!arr[3].innerHTML))?true:false;
    check[4] = ((arr[6].innerHTML == 'X') && (arr[7].innerHTML == 'X') && (!arr[8].innerHTML))?true:false;
    check[5] = ((arr[7].innerHTML == 'X') && (arr[8].innerHTML == 'X') && (!arr[6].innerHTML))?true:false;
    
    check[6] = ((arr[0].innerHTML == 'X') && (arr[3].innerHTML == 'X') && (!arr[6].innerHTML))?true:false;
    check[7] = ((arr[3].innerHTML == 'X') && (arr[6].innerHTML == 'X') && (!arr[0].innerHTML))?true:false;
    check[8] = ((arr[1].innerHTML == 'X') && (arr[4].innerHTML == 'X') && (!arr[7].innerHTML))?true:false;
    check[9] = ((arr[4].innerHTML == 'X') && (arr[7].innerHTML == 'X') && (!arr[1].innerHTML))?true:false;
    check[10] = ((arr[2].innerHTML == 'X') && (arr[5].innerHTML == 'X') && (!arr[8].innerHTML))?true:false;
    check[11] = ((arr[5].innerHTML == 'X') && (arr[8].innerHTML == 'X') && (!arr[2].innerHTML))?true:false;
    
    check[12] = ((arr[0].innerHTML == 'X') && (arr[4].innerHTML == 'X') && (!arr[8].innerHTML))?true:false;
    check[13] = ((arr[4].innerHTML == 'X') && (arr[8].innerHTML == 'X') && (!arr[0].innerHTML))?true:false;
    check[14] = ((arr[2].innerHTML == 'X') && (arr[4].innerHTML == 'X') && (!arr[6].innerHTML))?true:false;
    check[15] = ((arr[4].innerHTML == 'X') && (arr[6].innerHTML == 'X') && (!arr[2].innerHTML))?true:false;
    check[16] = ((arr[0].innerHTML == 'X') && (arr[6].innerHTML == 'X') && (!arr[3].innerHTML))?true:false;
    check[17] = ((arr[2].innerHTML == 'X') && (arr[8].innerHTML == 'X') && (!arr[5].innerHTML))?true:false;
    check[18] = ((arr[0].innerHTML == 'X') && (arr[2].innerHTML == 'X') && (!arr[1].innerHTML))?true:false;
    check[19] = ((arr[6].innerHTML == 'X') && (arr[7].innerHTML == 'X') && (!arr[8].innerHTML))?true:false;
}

function result () {
    if ((arr[0].innerHTML == 'X') && (arr[1].innerHTML == 'X') && (arr[2].innerHTML == 'X')) return (resultField.innerHTML='ПОБЕДА');
    if ((arr[3].innerHTML == 'X') && (arr[4].innerHTML == 'X') && (arr[5].innerHTML == 'X')) return (resultField.innerHTML='ПОБЕДА');
    if ((arr[6].innerHTML == 'X') && (arr[7].innerHTML == 'X') && (arr[8].innerHTML == 'X')) return (resultField.innerHTML='ПОБЕДА');
    if ((arr[0].innerHTML == 'X') && (arr[3].innerHTML == 'X') && (arr[6].innerHTML == 'X')) return (resultField.innerHTML='ПОБЕДА');
    if ((arr[1].innerHTML == 'X') && (arr[4].innerHTML == 'X') && (arr[7].innerHTML == 'X')) return (resultField.innerHTML='ПОБЕДА');
    if ((arr[2].innerHTML == 'X') && (arr[5].innerHTML == 'X') && (arr[8].innerHTML == 'X')) return (resultField.innerHTML='ПОБЕДА');
    if ((arr[0].innerHTML == 'X') && (arr[4].innerHTML == 'X') && (arr[8].innerHTML == 'X')) return (resultField.innerHTML='ПОБЕДА');
    if ((arr[2].innerHTML == 'X') && (arr[4].innerHTML == 'X') && (arr[6].innerHTML == 'X')) return (resultField.innerHTML='ПОБЕДА');
    
    if ((arr[0].innerHTML == '0') && (arr[1].innerHTML == '0') && (arr[2].innerHTML == '0')) return (resultField.innerHTML='ПОРАЖЕНИЕ');
    if ((arr[3].innerHTML == '0') && (arr[4].innerHTML == '0') && (arr[5].innerHTML == '0')) return (resultField.innerHTML='ПОРАЖЕНИЕ');
    if ((arr[6].innerHTML == '0') && (arr[7].innerHTML == '0') && (arr[8].innerHTML == '0')) return (resultField.innerHTML='ПОРАЖЕНИЕ');
    if ((arr[0].innerHTML == '0') && (arr[3].innerHTML == '0') && (arr[6].innerHTML == '0')) return (resultField.innerHTML='ПОРАЖЕНИЕ');
    if ((arr[1].innerHTML == '0') && (arr[4].innerHTML == '0') && (arr[7].innerHTML == '0')) return (resultField.innerHTML='ПОРАЖЕНИЕ');
    if ((arr[2].innerHTML == '0') && (arr[5].innerHTML == '0') && (arr[8].innerHTML == '0')) return (resultField.innerHTML='ПОРАЖЕНИЕ');
    if ((arr[0].innerHTML == '0') && (arr[4].innerHTML == '0') && (arr[8].innerHTML == '0')) return (resultField.innerHTML='ПОРАЖЕНИЕ');
    if ((arr[2].innerHTML == '0') && (arr[4].innerHTML == '0') && (arr[6].innerHTML == '0')) return (resultField.innerHTML='ПОРАЖЕНИЕ');
}
    
function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
 }

function randomStep ()  {
    do { 
        num = getRandomIntInclusive(0,8);
    } while (arr[num].innerHTML);
    arr[num].innerHTML = '0';
    nkomp++;
}  
