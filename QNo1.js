
function Add(Num1) {
    // let def = 14; // child scope

    return function (Num2) { //anonymous function
        console.log(Num1 + Num2);
    }
}
let innerfunction = Add(7);

innerfunction(9);

