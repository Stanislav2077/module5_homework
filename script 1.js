let inputValue = prompt("Введите число, не равное нулю:");
console.log(inputValue);

if ((typeof(+inputValue) == 'number') && (!isNaN(+inputValue))){
    if (inputValue % 2 === 0) {
        console.log("число является четным");
    } else {
        console.log("число является нечетным");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}