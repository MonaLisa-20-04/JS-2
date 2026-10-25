function countForMe(){
    let c = 0;
    return function(){
        c++;
        console.log(c);
    };
}
let fnc = countForMe();
fnc();
fnc();
fnc();

let fnc2 = countForMe();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();
fnc2();