function num(a, b, c) {
    if (a > b && a > c) {
        console.log(a, "Eng katta son"); // 1 
    } else if (b > a && b > c) {
        console.log(b, "Eng katta son"); // 0
    } else if (c > a && c > b) {
        console.log(c, "Eng katta son"); // 0
    }
    if (a < b && a < c) {
        console.log(a, "Eng kichik son"); // 0 
    } else if (b < a && b < c) {
        console.log(b, "Eng kichik son"); // 1
    } else if (c < a && c < b) {
        console.log(c, "Eng kichik son"); // 0
    } else {
        console.log("ikkta son teng bolishi mumkun");
    }
}
num(19, 20, 25)
// num = prompt("birinchi misol: birinchi soni kiriting")
// num = prompt("birinchi misol: ikkinchi soni kiriting")
// num = prompt("birinchi misol: uchinchi soni kiriting")




function num2(a, b) {
    let c = a / b
    if (a / b) {
        console.log(+a + " Niqob " + b + " odamga " + c + " tadan taqsimlanadi.");
    }

}

num2(20, 10)
// num2 = prompt("ikkinchi misol: birinchi sonni kiriting")
// num2 = prompt("ikkinchi misol: ikkinchi sonni kiriting")


function num3(a, b) {
    if (a <= b || a > b) {
        console.log(b);
    } if (b <= a || b > a) {
        console.log(a);
    }
}

num3(15, 17)
// num3 = prompt("uchinchi misol: birinchi sonni kiriting")
// num3 = prompt("uchinchi misol: ikkinchi sonni kiriting")