const binary = document.getElementById("binary");
const decimal = document.getElementById("decimal");
const btnConvert = document.getElementById("btnConvert");



btnConvert.addEventListener("click", () => {
    bin2dec();
});

function bin2dec() {
    var val = binary.value;
    var count = 1;

    for (let i in val) {
        if (val[i] != 0 && val[i] != 1) {
            alert("Not a binary number");
            count = 0;
            break;
        }
    }

    if (val.length === 0) {
        alert("please enter binary number")
        count = 0;
    }
    var x = parseInt(val, 2);

    if (count){
        decimal.value = x;
    }else {
        alert("enter valid binary number");
    }
}
