let arr = ['1', '5', 'a', '15', 'b', '23', 'c', '44'];
let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("Все элементы в массиве одинаковые");
} else {
    console.log("Не все элементы в массиве одинаковые");
}