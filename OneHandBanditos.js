var count = 0;
var cashin = 100;
var r;
function start() {
    var cash = document.getElementById('cash');
    var n1 = document.getElementById('r1');
    var n2 = document.getElementById('r2');
    var n3 = document.getElementById('r3');
    var button2 = document.getElementById('b2');
    button2.disabled = true;
    var button1 = document.getElementById('b1');
    if (cashin < 10) {
        button2.disabled = true;
        button1.disabled = false;
        cashin = 0;
        cash.innerHTML = cashin;
    }
    else {
    cashin -= 10;
    cash.innerHTML = cashin;
    var timer1 = setInterval(function(){
        button2.disabled = true;
        r = Math.floor(Math.random() * 7 + 1);
        n1.innerHTML = r;
    }, 1);
    setTimeout(function(){clearInterval(timer1);}, 2000);
    var timer2 = setInterval(function(){
        r = Math.floor(Math.random() * 7 + 1);
        n2.innerHTML = r;
    }, 1);
    setTimeout(function(){clearInterval(timer2);}, 3000);
    var timer3 = setInterval(function(){
        r = Math.floor(Math.random() * 7 + 1);
        n3.innerHTML = r;
    }, 1);
    setTimeout(function(){
        clearInterval(timer3);
        checkwin();
        button2.disabled = false;
                         }, 4000);
    }
}
function help() {
    cashin += 50;
    document.getElementById('cash').innerHTML = cashin;
    document.getElementById('b1').disabled = true;
    document.getElementById('b2').disabled = false;
}
function look() {
    var div = document.getElementById('look');
    if (count == 0) {
        div.style.display = "block";
        count++;
    }
    else if (count == 1) {
        div.style.display = "none";
        count--;
    }
}
function finish() {
    document.location="index.html";
}
function checkwin() {
            if (n1.innerHTML == "1" && n2.innerHTML == "1") {
                cashin += 100;
                cash.innerHTML = cashin;
                alert('Вы выиграли 100$');}
            else if (n1.innerHTML == "2" && n2.innerHTML == "2") {
                cashin += 200;
                cash.innerHTML = cashin;
                alert('Вы выиграли 200$');
            button.disabled = false;}
            else if (n1.innerHTML == "3" && n2.innerHTML == "3") {
                cashin += 200;
                cash.innerHTML = cashin;
                alert('Вы выиграли 300$');
            button.disabled = false;}
            else if (n1.innerHTML == "4" && n2.innerHTML == "4") {
                cashin += 400;
                cash.innerHTML = cashin;
                alert('Вы выиграли 400$');
            button.disabled = false;}
            else if (n1.innerHTML == "5" && n2.innerHTML == "5") {
                cashin += 500;
                cash.innerHTML = cashin;
                alert('Вы выиграли 500$');
            button.disabled = false;}
            else if (n1.innerHTML == "6" && n2.innerHTML == "6") {
                cashin += 600;
                cash.innerHTML = cashin;
                alert('Вы выиграли 600$');
            button.disabled = false;}
            else if (n1.innerHTML == "7" && n2.innerHTML == "7") {
                cashin += 700;
                cash.innerHTML = cashin;
                alert('Вы выиграли 700$');}
            else if (n1.innerHTML == "1" && n2.innerHTML == "1" && n3.innerHTML == "1") {
                cashin += 1000;
                cash.innerHTML = cashin;
                alert('Вы выиграли 1000$');}
            else if (n1.innerHTML == "2" && n2.innerHTML == "2" && n3.innerHTML == "2") {
                cashin += 2000;
                cash.innerHTML = cashin;
                alert('Вы выиграли 2000$');}
            else if (n1.innerHTML == "3" && n2.innerHTML == "3" && n3.innerHTML == "3") {
                cashin += 3000;
                cash.innerHTML = cashin;
                alert('Вы выиграли 3000$');}
            else if (n1.innerHTML == "4" && n2.innerHTML == "4" && n3.innerHTML == "4") {
                cashin += 5000;
                cash.innerHTML = cashin;
                alert('Вы выиграли 5000$');}
            else if (n1.innerHTML == "5" && n2.innerHTML == "5" && n3.innerHTML == "5") {
                cashin += 10000;
                cash.innerHTML = cashin;
                alert('Вы выиграли 10000$');}
            else if (n1.innerHTML == "6" && n2.innerHTML == "6" && n3.innerHTML == "6") {
                cashin += 25000;
                cash.innerHTML = cashin;
                alert('Вы выиграли 25000$');}
            else if (n1.innerHTML == "7" && n2.innerHTML == "7" && n3.innerHTML == "7") {
                cashin += 100000;
                cash.innerHTML = cashin;
                alert('Вы выиграли 100000$');}
            else if (n1.innerHTML == "7" || n2.innerHTML == "7" || n3.innerHTML == "7") {
                cashin += 15;
                cash.innerHTML = cashin;
                alert('Вы выиграли 15$');
            }
            else if (n2.innerHTML == "1" && n3.innerHTML == "1") {
                if (cashin - 100 < 0) {cashin = 0;}
                else {
                    cashin -= 100;
                }
                cash.innerHTML = cashin;
                alert('Вы проиграли 100$');
            }
            else if (n2.innerHTML == "0" && n3.innerHTML == "0") {
                if (cashin - 50 < 0) {cashin = 0;}
                else {
                    cashin -= 50;
                }
                cash.innerHTML = cashin;
                alert('Вы проиграли 50$');
            }
            else if (n2.innerHTML == "2" && n3.innerHTML == "2") {
                if (cashin - 200 < 0) {cashin = 0;}
                else {
                    cashin -= 200;
                }
                cash.innerHTML = cashin;
                alert('Вы проиграли 200$');
            }
            else if (n2.innerHTML == "3" && n3.innerHTML == "3") {
                if (cashin - 300 < 0) {cashin = 0;}
                else {
                    cashin -= 300;
                }
                cash.innerHTML = cashin;
                alert('Вы проиграли 300$');
            }
            else if (n2.innerHTML == "4" && n3.innerHTML == "4") {
                if (cashin - 400 < 0) {cashin = 0;}
                else {
                    cashin -= 400;
                }
                cash.innerHTML = cashin;
                alert('Вы проиграли 400$');
            }
            else if (n2.innerHTML == "5" && n3.innerHTML == "5") {
                if (cashin - 500 < 0) {cashin = 0;}
                else {
                    cashin -= 500;
                }
                cash.innerHTML = cashin;
                alert('Вы проиграли 500$');
            }
            else if (n2.innerHTML == "6" && n3.innerHTML == "6") {
                if (cashin - 600 < 0) {cashin = 0;}
                else {
                    cashin -= 600;
                }
                cash.innerHTML = cashin;
                alert('Вы проиграли 600$');
            }
            else if (n2.innerHTML == "7" && n3.innerHTML == "7") {
                if (cashin - 700 < 0) {cashin = 0;}
                else {
                    cashin -= 700;
                }
                cash.innerHTML = cashin;
                alert('Вы проиграли 700$');
            }
            else if (n1.innerHTML == "0" && n2.innerHTML == "0" && n3.innerHTML == "0") {
                if (cashin - 100 < 0) {cashin = 0;}
                else {
                    cashin -= 100;
                }
                cash.innerHTML = cashin;
                alert('Вы проиграли 50000$');
            }
}