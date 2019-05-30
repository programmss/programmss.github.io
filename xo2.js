var mas = ['','','','','','','','',''];
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var check = false;
function b1() {
    var button = document.getElementById('b1').value;
    var t1 = document.getElementById('t1');
    t1.innerHTML="<img style='width:75px;height:75px;' src='images/krestik.png'>";
    mas[0] = 'x';
    checkwin();
    random1();
    checkwin();
}
function b2() {
    var button = document.getElementById('b2').value;
    var t2 = document.getElementById('t2');
     t2.innerHTML="<img style='width:75px;height:75px;' src='images/krestik.png'>";
     mas[1] = 'x';
    checkwin();
    if (check == false) {
        random1();
        checkwin();
    }
}
function b3() {
    var button = document.getElementById('b3').value;
    var t3 = document.getElementById('t3');
    t3.innerHTML="<img style='width:75px;height:75px;' src='images/krestik.png'>";
    mas[2] = 'x';
    checkwin();
    if (check == false) {
        random1();
        checkwin();
    }
}
function b4() {
    var button = document.getElementById('b4').value;
    var t4 = document.getElementById('t4');
    t4.innerHTML="<img style='width:75px;height:75px;' src='images/krestik.png'>";
    mas[3] = 'x';
    checkwin();
    if (check == false) {
        random1();
        checkwin();
    }
}
function b5() {
    var button = document.getElementById('b5').value;
    var t5 = document.getElementById('t5');
    t5.innerHTML="<img style='width:75px;height:75px;' src='images/krestik.png'>";
    mas[4] = 'x';
    checkwin();
    if (check == false) {
        random1();
        checkwin();
    }
}
function b6() {
    var button = document.getElementById('b6').value;
    var t6 = document.getElementById('t6');
    t6.innerHTML="<img style='width:75px;height:75px;' src='images/krestik.png'>";
    mas[5] = 'x';
    checkwin();
    if (check == false) {
        random1();
        checkwin();
    }
}
function b7() {
    var button = document.getElementById('b7').value;
    var t7 = document.getElementById('t7');
    t7.innerHTML="<img style='width:75px;height:75px;' src='images/krestik.png'>";
    mas[6] = 'x';
    checkwin();
    if (check == false) {
        random1();
        checkwin();
    }
}
function b8() {
    var button = document.getElementById('b8').value;
    var t8 = document.getElementById('t8');
    t8.innerHTML="<img style='width:75px;height:75px;' src='images/krestik.png'>";
    mas[7] = 'x';
    checkwin();
    if (check == false) {
        random1();
        checkwin();
    }
}
function b9() {
    var button = document.getElementById('b9').value;
    var t9 = document.getElementById('t9');
    t9.innerHTML="<img style='width:75px;height:75px;' src='images/krestik.png'>";
    mas[8] = 'x';
    checkwin();
    if (check == false) {
        random1();
        checkwin();
    }
}
function random1() {
    if (mas[0] == 'x' && mas[1] == 'x') {
        if (mas[2] == '') {
            document.getElementById('t3').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[2] = 'o';
        }
            else {random2();}
    }
    else if (mas[0] == 'x' && mas[2] == 'x') {
        if (mas[1] == '') {
            document.getElementById('t2').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[1] = 'o';
        }
            else {random2();}
    }
    else if (mas[1] == 'x' && mas[2] == 'x') {
        if (mas[0] == '') {
            document.getElementById('t1').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[0] = 'o';
        }
            else {random2();}
    }
    else if (mas[3] == 'x' && mas[4] == 'x') {
        if (mas[5] == '') {
            document.getElementById('t6').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[5] = 'o';
        }
            else {random2();}
    }
    else if (mas[3] == 'x' && mas[5] == 'x') {
        if (mas[4] == '') {
            document.getElementById('t5').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[4] = 'o';
        }
            else {random2();}
    }
    else if (mas[4] == 'x' && mas[5] == 'x') {
        if (mas[3] == '') {
            document.getElementById('t4').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[3] = 'o';
        }
            else {random2();}
    }
    else if (mas[6] == 'x' && mas[7] == 'x') {
        if (mas[8] == '') {
            document.getElementById('t9').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[8] = 'o';
        }
            else {random2();}
    }
    else if (mas[6] == 'x' && mas[8] == 'x') {
        if (mas[7] == '') {
            document.getElementById('t8').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[7] = 'o';
        }
            else {random2();}
    }
    else if (mas[7] == 'x' && mas[8] == 'x') {
        if (mas[6] == '') {
            document.getElementById('t7').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[6] = 'o';
        }
            else {random2();}
    }
    else if (mas[0] == 'x' && mas[3] == 'x') {
        if (mas[6] == '') {
            document.getElementById('t7').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[6] = 'o';
        }
            else {random2();}
    }
    else if (mas[0] == 'x' && mas[6] == 'x') {
        if (mas[3] == '') {
            document.getElementById('t4').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[3] = 'o';
        }
            else {random2();}
    }
    else if (mas[3] == 'x' && mas[6] == 'x') {
        if (mas[0] == '') {
            document.getElementById('t1').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[0] = 'o';
        }
            else {random2();}
    }
    else if (mas[1] == 'x' && mas[4] == 'x') {
        if (mas[7] == '') {
            document.getElementById('t8').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[7] = 'o';
        }
            else {random2();}
    }
    else if (mas[1] == 'x' && mas[7] == 'x') {
        if (mas[4] == '') {
            document.getElementById('t5').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[4] = 'o';
        }
            else {random2();}
    }
    else if (mas[4] == 'x' && mas[7] == 'x') {
        if (mas[1] == '') {
            document.getElementById('t2').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[1] = 'o';
        }
            else {random2();}
    }
    else if (mas[2] == 'x' && mas[5] == 'x') {
        if (mas[8] == '') {
            document.getElementById('t9').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[8] = 'o';
        }
            else {random2();}
    }
    else if (mas[2] == 'x' && mas[8] == 'x') {
        if (mas[5] == '') {
            document.getElementById('t6').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[5] = 'o';
        }
            else {random2();}
    }
    else if (mas[5] == 'x' && mas[8] == 'x') {
        if (mas[4] == '') {
            document.getElementById('t3').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[2] = 'o';
        }
            else {random2();}
    }
    else if (mas[0] == 'x' && mas[4] == 'x') {
        if (mas[8] == '') {
            document.getElementById('t9').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[8] = 'o';
        }
            else {random2();}
    }
    else if (mas[0] == 'x' && mas[8] == 'x') {
        if (mas[4] == '') {
            document.getElementById('t5').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[4] = 'o';
        }
            else {random2();}
    }
    else if (mas[4] == 'x' && mas[8] == 'x') {
        if (mas[0] == '') {
            document.getElementById('t1').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[0] = 'o';
        }
            else {random2();}
    }
    else if (mas[2] == 'x' && mas[4] == 'x') {
        if (mas[6] == '') {
            document.getElementById('t7').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[6] = 'o';
        }
            else {random2();}
    }
    else if (mas[2] == 'x' && mas[6] == 'x') {
        if (mas[4] == '') {
            document.getElementById('t5').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[4] = 'o';
        }
            else {random2();}
    }
    else if (mas[4] == 'x' && mas[6] == 'x') {
        if (mas[2] == '') {
            document.getElementById('t3').innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
            mas[2] = 'o';
        }
            else {random2();}
    }
    else {random2();}
}
function checkwin() {
    if (mas[0] == 'x' && mas[1] == 'x' && mas[2] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[0] == 'o' && mas[1] == 'o' && mas[2] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[3] == 'x' && mas[4] == 'x' && mas[5] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
        check = true;
    }
    else if (mas[3] == 'o' && mas[4] == 'o' && mas[5] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[6] == 'x' && mas[7] == 'x' && mas[8] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[6] == 'o' && mas[7] == 'o' && mas[8] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[0] == 'x' && mas[4] == 'x' && mas[8] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[0] == 'o' && mas[4] == 'o' && mas[8] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[2] == 'x' && mas[4] == 'x' && mas[6] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[2] == 'o' && mas[4] == 'o' && mas[6] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[0] == 'x' && mas[3] == 'x' && mas[6] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[0] == 'o' && mas[3] == 'o' && mas[6] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[1] == 'x' && mas[4] == 'x' && mas[7] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[1] == 'o' && mas[4] == 'o' && mas[7] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[2] == 'x' && mas[5] == 'x' && mas[8] == 'x') {
        alert('Крестики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[2] == 'o' && mas[5] == 'o' && mas[8] == 'o') {
        alert('Нолики ВЫИГРАЛИ!');
        document.location="xo1.html";
        check = true;
    }
    else if (mas[0] != '' && mas[1] != '' && mas[2] != '' && mas[3] != '' && mas[4] != '' && mas[5] != '' && mas[6] != '' && mas[7] != '' && mas[8] != '') {alert('НИЧЬЯ');
        document.location="xo1.html";
        check = true;}
}
function random2() {
    var t;
    var r = Math.floor(Math.random() * 9 + 1);
        if (r == 1) {
            if (mas[0] == '') {
                t = document.getElementById('t1');t.innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
                mas[0] = 'o';
            }
            else {random2();}
        }
        else if (r == 2) {
            if (mas[1] == '') {
                t = document.getElementById('t2');t.innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
                mas[1] = 'o';
            }
            else {random2();}
        }
        else if (r == 3) {
            if (mas[2] == '') {
                t = document.getElementById('t3');t.innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
                mas[2] = 'o';
            }
            else {random2();}
        }
        else if (r == 4) {
            if (mas[3] == '') {
                t = document.getElementById('t4');t.innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
                mas[3] = 'o';
            }
            else {random2();}
        }
        else if (r == 5) {
            if (mas[4] == '') {
                t = document.getElementById('t5');t.innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
                mas[4] = 'o';
            }
            else {random2();}
        }
        else if (r == 6) {
            if (mas[5] == '') {
                t = document.getElementById('t6');t.innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
                mas[5] = 'o';
            }
            else {random2();}
        }
        else if (r == 7) {
            if (mas[6] == '') {
                t = document.getElementById('t7');t.innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
                mas[6] = 'o';
            }
            else {random2();}
        }
        else if (r == 8) {
            if (mas[7] == '') {
                t = document.getElementById('t8');t.innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
                mas[7] = 'o';
            }
            else {random2();}
        }
        else if (r == 9) {
            if (mas[8] == '') {
                t = document.getElementById('t9');t.innerHTML="<img style='width:75px;height:75px;' src='images/nolik.png'>";
                mas[8] = 'o';
            }
            else {random2();}
        }
}