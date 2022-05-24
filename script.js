var container = document.createElement("div");
container.setAttribute("class", "container");
var cal = document.createElement("div");
cal.setAttribute("class", "calculator");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "screen");
input.setAttribute("id", "result");
container.append(cal);
cal.append(input);
document.body.append(container);

var table = document.createElement("table");
table.setAttribute("class", "table");
var tr1 = document.createElement("tr");
var td1 = document.createElement("td");
var button1 = creatbuttons("button", "id", "bracket1", "(");
var td2 = document.createElement("td");
var button2 = creatbuttons("button", "id", "bracket2", ")");
var td3 = document.createElement("td");
var button3 = creatbuttons("button", "id", "clear", "C");
var td4 = document.createElement("td");
var button4 = creatbuttons("button", "id", "per", "%");
td1.append(button1); td2.append(button2); td3.append(button3); td4.append(button4)
tr1.append(td1, td2, td3, td4);


var tr2 = document.createElement("tr");
var td5 = document.createElement("td");
var button5 = creatbuttons("button", "id", "7", "7");
var td6 = document.createElement("td");
var button6 = creatbuttons("button", "id", "8", "8");
var td7 = document.createElement("td");
var button7 = creatbuttons("button", "id", "9", "9");
var td8 = document.createElement("td");
var button8 = creatbuttons("button", "id", "mul", "X");
td5.append(button5); td6.append(button6); td7.append(button7); td8.append(button8);
tr2.append(td5, td6, td7, td8);

var tr3 = document.createElement("tr");
var td9 = document.createElement("td");
var button9 = creatbuttons("button", "id", "4", "4");
var td10 = document.createElement("td");
var button10 = creatbuttons("button", "id", "5", "5");
var td11 = document.createElement("td");
var button11 = creatbuttons("button", "id", "6", "6");
var td12 = document.createElement("td");
var button12 = creatbuttons("button", "id", "subtract", "-");
td9.append(button9); td10.append(button10); td11.append(button11); td12.append(button12);
tr3.append(td9, td10, td11, td12);

var tr4 = document.createElement("tr");
var td13 = document.createElement("td");
var button13 = creatbuttons("button", "id", "1", "1");
var td14 = document.createElement("td");
var button14 = creatbuttons("button", "id", "2", "2");
var td15 = document.createElement("td");
var button15 = creatbuttons("button", "id", "3", "3");
var td16 = document.createElement("td");
var button16 = creatbuttons("button", "id", "add", "+");
td13.append(button13); td14.append(button14); td15.append(button15); td16.append(button16);
tr4.append(td13, td14, td15, td16);

var tr5 = document.createElement("tr");
var td17 = document.createElement("td");
var button17 = creatbuttons("button", "id", "0", "0");
var td18 = document.createElement("td");
var button18 = creatbuttons("button", "id", "decimal", ".");
var td19 = document.createElement("td");
var button19 = creatbuttons("button", "id", "divide", "/");
var td20 = document.createElement("td");
var button20 = creatbuttons("button", "id", "equal", "=");
td17.append(button17); td18.append(button18); td19.append(button19); td20.append(button20);
tr5.append(td17, td18, td19, td20);
table.append(tr1, tr2, tr3, tr4, tr5);
cal.append(table);
function creatbuttons(elementname, attrname1, attrval1, value) {
    var ele = document.createElement(elementname);
    ele.setAttribute(attrname1, attrval1);

    ele.innerHTML = value;
    return ele;
}
let screen = document.getElementById("result");
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (ele) => {
        buttonText = ele.target.innerText;
        console.log('button text is', buttonText);

        if (buttonText == 'X') {
            buttonText = '*';
            // screenValue += buttonText;
            // screen.value = screenValue;
        }
        if (buttonText == 'C') {
            screenValue = "";
            result.value = screenValue;
        }
        else if (buttonText == '=') {
            result.value = eval(screenValue);
        }

        else {
            screenValue += buttonText;
            result.value = screenValue;
        }


    })
}



