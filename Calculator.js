var btn = document.getElementsByClassName('numbtn');
var display = document.getElementById('play');
var o1 = 0;
var o2 = null;
var op = null;


var del = document.getElementsByClassName('clear');

del[0].onclick = function () {
    display.innerText = "";
};
var del1 = document.getElementsByClassName('clear2');

del1[0].onclick = function () {
    let str = display.innerText;
    display.innerText = str.slice(0, str.length - 1);
};

//--------------for mouse event------------------//

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        let value = this.getAttribute('data-value');

        if (value == '+' || value == '*' || value == '-' || value == '%') {
            o1 = parseFloat(display.innerText);
            op = value;
            display.innerText += value;
            //display.innerText="";
        }
        else if (value == '=') {
            o2 = parseFloat(display.innerText);
            display.innerText += value;
            display.innerText = "";
            display.innerText = eval(o1 + " " + op + " " + o2);
        }
        else {
            display.innerText += value;
        }
    });
}
//--------------for keyboard event------------------//

document.addEventListener('keypress',function(event)
{
    let x=event.keyCode;
    let value=String.fromCharCode(x);

    if (value == '+' || value == '*' || value == '-' || value == '%' || value=='/') {
        o1 = parseFloat(display.innerText);
        op = value;
        display.innerText += value;
        //display.innerText="";
    }
    else if (value == '=') {
        o2 = parseFloat(display.innerText);
        display.innerText += value;
        display.innerText = "";
        display.innerText = eval(o1 + " " + op + " " + o2);
    }
    else {
        display.innerText += value;
    }
});