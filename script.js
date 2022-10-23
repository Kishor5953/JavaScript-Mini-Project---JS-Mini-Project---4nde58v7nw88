const input = document.getElementById("search");
input.value = 0 ;
let str = "";

// 12 + 8 + 3

const display = ( val ) => {
    str+=val;
    input.value = str;
}


const calculate = ( ) => {
    let expration = input.value;
    input.value = eval(expration);
}

// input.value=document.getElementById("search")

const clearScreen = () => {
    str = "";
    input.value=0;
    
}