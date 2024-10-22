let username = prompt("Podaj imię:");
let number1 = parseInt(prompt("Podaj pierwszą liczbę: "));
let number2 = parseInt(prompt("Podaj drugą liczbę: "));
let operator = prompt("Wybierz operator działania: +,-,*,/,**")
if (operator == +) {
    result = number1 + number2
} else if (operator == -) {
    result = number1 - number2
} else if (operator == *) {
    result = number1 * number2
} else if (operator == /) {
    result = number1 / number2
    if (number2 == 0){
        document.write("Nie można dzielić przez 0!");
    }
} else if (operator == **) {
    result = number1 ** number2
} else {
    document.write("Podano błędny operator!");
};
console.log(result);
document.write(result);
