/* пользователь */
var count = 0;
var res = 1;
var mas = [['','',''],['','',''],['','','']];
function b1() {
var a = document.getElementById('da');
    var t1 = document.getElementById('t1');
    if (count == 0) {
        a.innerHTML = 'Ход: ноликов';
        t1.innerHTML = "<img style='width:75px;height:75px;' src='images/krestik.png'>";
        mas[0][0] = 'x';
        count++;
    }
    else if (count == 1) {
        a.innerHTML = 'Ход: крестиков';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/nolik.png'>";
        mas[0][0] = 'o';
        count--;
    }
    checkwin();
}
function b2() {
    var a = document.getElementById('da');
    document.getElementById('b2').style.display = 'none';
    var t1 = document.getElementById('t2');
    if (count == 0) {
        a.innerHTML = 'Ход: ноликов';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/krestik.png'>";
        mas[0][1] = 'x';
        count++;
    }
    else if (count == 1) {
        a.innerHTML = 'Ход: крестиков';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/nolik.png'>";
        mas[0][1] = 'o';
        count--;
    }
    checkwin();
}
function b3() {
    var a = document.getElementById('da');
    document.getElementById('b3').style.display = 'none';
    var t1 = document.getElementById('t3');
    if (count == 0) {
        a.innerHTML = 'Ход: ноликов';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/krestik.png'>";
        mas[0][2] = 'x';
        count++;
    }
    else if (count == 1) {
        a.innerHTML = 'Ход: крестиков';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/nolik.png'>";
        mas[0][2] = 'o';
        count--;
    }
    checkwin();
}
function b4() {
    var a = document.getElementById('da');
    document.getElementById('b4').style.display = 'none';
    var t1 = document.getElementById('t4');
    if (count == 0) {
        a.innerHTML = 'Ход: ноликов';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/krestik.png'>";
        mas[1][0] = 'x';
        count++;
    }
    else if (count == 1) {
        a.innerHTML = 'Ход: крестиков';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/nolik.png'>";
        mas[1][0] = 'o';
        count--;
    }
    checkwin();
}
function b5() {
    var a = document.getElementById('da');
    document.getElementById('b5').style.display = 'none';
    var t1 = document.getElementById('t5');
    if (count == 0) {
        a.innerHTML = 'Ход: ноликов';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/krestik.png'>";
        mas[1][1] = 'x';
        count++;
    }
    else if (count == 1) {
        a.innerHTML = 'Ход: крестиков';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/nolik.png'>";
        mas[1][1] = 'o';
        count--;
    }
    checkwin();
}
function b6() {
    var a = document.getElementById('da');
    document.getElementById('b6').style.display = 'none';
    var t1 = document.getElementById('t6');
    if (count == 0) {
        a.innerHTML = 'Ход: ноликов';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/krestik.png'>";
        mas[1][2] = 'x';
        count++;
    }
    else if (count == 1) {
        a.innerHTML = 'Ход: крестиков';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/nolik.png'>";
        mas[1][2] = 'o';
        count--;
    }
    checkwin();
}
function b7() {
    var a = document.getElementById('da');
    document.getElementById('b7').style.display = 'none';
    var t1 = document.getElementById('t7');
    if (count == 0) {
        a.innerHTML = 'Ход: ноликов';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/krestik.png'>";
        mas[2][0] = 'x';
        count++;
    }
    else if (count == 1) {
        a.innerHTML = 'Ход: крестиков';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/nolik.png'>";
        mas[2][0] = 'o';
        count--;
    }
    checkwin();
}
function b8() {
    var a = document.getElementById('da');
    document.getElementById('b8').style.display = 'none';
    var t1 = document.getElementById('t8');
    if (count == 0) {
        a.innerHTML = 'Ход: ноликов';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/krestik.png'>";
        mas[2][1] = 'x';
        count++;
    }
    else if (count == 1) {
        a.innerHTML = 'Ход: крестиков';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/nolik.png'>";
        mas[2][1] = 'o';
        count--;
    }
    checkwin();
}
function b9() {
    var a = document.getElementById('da');
    document.getElementById('b9').style.display = 'none';
    var t1 = document.getElementById('t9');
    if (count == 0) {
        a.innerHTML = 'Ход: ноликов';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/krestik.png'>";
        mas[2][2] = 'x';
        count++;
    }
    else if (count == 1) {
        a.innerHTML = 'Ход: крестиков';
        t1.innerHTML ="<img style='width:75px;height:75px;' src='images/nolik.png'>";
        mas[2][2] = 'o';
        count--;
    }
    checkwin();
}
function checkwin() {
    if (mas[0][0] == 'x' && mas[0][1] == 'x' && mas[0][2] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[0][0] == 'o' && mas[0][1] == 'o' && mas[0][2] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[1][0] == 'x' && mas[1][1] == 'x' && mas[1][2] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[1][0] == 'o' && mas[1][1] == 'o' && mas[1][2] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[2][0] == 'x' && mas[2][1] == 'x' && mas[2][2] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[2][0] == 'o' && mas[2][1] == 'o' && mas[2][2] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[0][0] == 'x' && mas[1][1] == 'x' && mas[2][2] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[0][0] == 'o' && mas[1][1] == 'o' && mas[2][2] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[0][2] == 'x' && mas[1][1] == 'x' && mas[2][0] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[0][2] == 'o' && mas[1][1] == 'o' && mas[2][0] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[0][0] == 'x' && mas[1][0] == 'x' && mas[2][0] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[0][0] == 'o' && mas[1][0] == 'o' && mas[2][0] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[0][1] == 'x' && mas[1][1] == 'x' && mas[2][1] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[0][1] == 'o' && mas[1][1] == 'o' && mas[2][1] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[0][2] == 'x' && mas[1][2] == 'x' && mas[2][2] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[0][2] == 'o' && mas[1][2] == 'o' && mas[2][2] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
    document.location="xo.html";
    }
    else if (mas[0][0] != '' && mas[0][1] != '' && mas[0][2] != '' && mas[1][0] != '' && mas[1][1] != '' && mas[1][2] != '' && mas[2][0] != '' && mas[2][1] != '' && mas[2][2] != '') {alert('НИЧЬЯ');
    document.location="xo.html";}
}