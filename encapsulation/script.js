function clickLimiter(){
    let click = 0;
    return function(){
        if(click < 5){
            click++;
            console.log(`clicked: ${click} times`);
        }
        else{
            console.error("LIMIT EXCEEDED!")
        }
    }
}

let fnc = clickLimiter();
fnc(); //1
fnc(); //2
fnc(); //3
fnc(); //4
fnc(); //5
fnc(); // error