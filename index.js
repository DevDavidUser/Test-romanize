//Romanize TDD 
function checktest(arabicnum,romannum){
    const number = romanize(arabicnum);
    if(number === romannum){
        console.log("pass");
    }else{
        console.log("fail");
    }
}
//case 1
console.log("test 1 --- el 1 se debe convertir en I");
//codigo
/*
function romanize(num){
    return 'I';
}
*/
//test
checktest(1,'I');
//case 2
console.log("test 2 --- el 2 se debe convertir en II");
//checktest(2,'II');
//codigo
/*
function romanize(num){
    if(num === 1){
        return 'I'
    }else{
        return 'II'
    }
}
*/
checktest(2,'II');
console.log("test 3 --- el 3 se debe convertir en III");
//checktest(3,'III');
/*
function romanize(num){
    if(num === 1){
        return 'I'
    }else if(num === 2){
        return 'II'
    }else{
        return 'III'
    }
}
*/
checktest(3,'III');

console.log("test 4 --- el 4 se debe convertir en IV");
//checktest(4,'IV');
/*
function romanize(num){
    if(num === 1){
        return 'I'
    }else if(num === 2){
        return 'II'
    }else if(num ===3){
        return 'III'
    }else{
        return 'IV'
    }
}
*/
//refactorizar codigo
/*
function romanize(num){
    var romanNumber = '';
    if(num <= 3){
        for(i=0; i<num;i++) {
            romanNumber += 'I';
         }
        return romanNumber
    }else{
        return 'IV'
    }
}
*/
checktest(4,'IV');
console.log("test 5 --- el 5 se debe convertir en V");
//checktest(5,'V');
/*
function romanize(num){
    var romanNumber = '';
    if(num <= 3){
        for(i=0; i<num;i++) {
            romanNumber += 'I';
         }
        return romanNumber
    }else if(num ===4){
        return 'IV'
    }else{
        return 'V'
    }
}
*/
checktest(5,'V');
console.log("test 6 --- el 6 se debe convertir en VI");
checktest(6,'VI');
/*
function romanize(num){
    var romanNumber = '';
    if(num <= 3){
        for(i=0; i<num;i++) {
            romanNumber += 'I';
         }
        return romanNumber
    }else if(num ===4){
        return 'IV'
    }else if(num === 5){
        return 'V'
    }else{
    return 'VI'
    }
}
*/
console.log("test 7 --- el 9 se debe convertir en IX");
//checktest(9,'IX');
/*function romanize(num){
    var romanNumber = '';
    if(num <= 3){
        for(i=0; i<num;i++) {
            romanNumber += 'I';
         }
        return romanNumber
    }else if(num ===4){
        return 'IV'
    }else if(num === 5){
        return 'V'
    }else if(num > 5 && num <9){
        romanNumber = 'V';
        for(i=0; i<num -5;i++) {
            romanNumber += 'I';
         }
        return romanNumber
    }else{
        return 'IX'
    }
}
*/
checktest(9,'IX');
console.log("test 8 --- el 10 se debe convertir en X");
//checktest(10,'X');
/*
function romanize(num){
    var romanNumber = '';
    if(num <= 3){
        for(i=0; i<num;i++) {
            romanNumber += 'I';
         }
        return romanNumber
    }else if(num ===4){
        return 'IV'
    }else if(num === 5){
        return 'V'
    }else if(num > 5 && num <9){
        romanNumber = 'V';
        for(i=0; i<num -5;i++) {
            romanNumber += 'I';
         }
        return romanNumber
    }else if(num === 9){
        return 'IX'
    }else{
        return 'X'
    }
}
*/
checktest(10,'X');
console.log("test 9 --- el 11 se debe convertir en XI");
//checktest(19,'XIX');
/*
function romanize(num){
    var romanNumber = '';
    if(num <= 3){
        for(i=0; i<num;i++) {
            romanNumber += 'I';
         }
        return romanNumber
    }else if(num ===4){
        return 'IV'
    }else if(num === 5){
        return 'V'
    }else if(num > 5 && num <9){
        romanNumber = 'V';
        for(i=0; i<num -5;i++) {
            romanNumber += 'I';
         }
        return romanNumber
    }else if(num === 9){
        return 'IX'
    }else if(num === 10){
        return 'X'
    }else{
        return 'XI'
    }
}
*/
// refactorizar codigo
/*
function romanize(num){
    var romanNumber = '';
    function getBase(num){
        if(num <= 3){
            for(i=0; i<num;i++) {
                romanNumber += 'I';
             }
            return romanNumber
        }else if(num ===4){
            return 'IV'
        }else if(num === 5){
            return 'V'
        }else if(num > 5 && num <9){
            romanNumber = 'V';
            for(i=0; i<num -5;i++) {
                romanNumber += 'I';
             }
            return romanNumber
        }else if(num === 9){
            return 'IX'
        }else if(num === 10){
            return 'X'
        }
    }
    if(num<=10){
       return getBase(num);
    }else{
        const val1 = getBase(num-(num%10));
        const val2 = getBase(num%10);
        return romanNumber =val1+val2;
    }
}
*/
checktest(19,'XIX');
console.log("test 10 --- el 20 se debe convertir en XX");
//checktest(21,'XXI');
/*
function romanize(num){
    var romanNumber = '';
    function getBase(num){
        if(num <= 3){
            for(i=0; i<num;i++) {
                romanNumber += 'I';
             }
            return romanNumber
        }else if(num ===4){
            return 'IV'
        }else if(num === 5){
            return 'V'
        }else if(num > 5 && num <9){
            romanNumber = 'V';
            for(i=0; i<num -5;i++) {
                romanNumber += 'I';
             }
            return romanNumber
        }else if(num === 9){
            return 'IX'
        }else if(num === 10){
            return 'X'
        }
    }
    if(num<=10){
       return getBase(num);
    }else{
        let mod = num%10;
        let val1;
        let val2;
        if(mod!=0){
            val1 = getBase(num-(mod));
            val2 = getBase(mod);
        }else{
            mod=10;
            val1 = getBase(num-(mod));
            val2 = getBase(mod);
        }
        return romanNumber =val1+val2;
    }
}
*/
checktest(20,'XX');
console.log("test 11 --- el 21 se debe convertir en XXI");
checktest(21,'XXI');
function romanize(num){
    var romanNumber = '';
    function getBase(num){
        if(num <= 3){
            for(i=0; i<num;i++) {
                romanNumber += 'I';
             }
            return romanNumber
        }else if(num ===4){
            return 'IV'
        }else if(num === 5){
            return 'V'
        }else if(num > 5 && num <9){
            romanNumber = 'V';
            for(i=0; i<num -5;i++) {
                romanNumber += 'I';
             }
            return romanNumber
        }else if(num === 9){
            return 'IX'
        }else if(num === 10){
            return 'X'
        }
    }
    if(num<=10){
       return getBase(num);
    }else{
        let mod = num%10;
        let val1='';
        let val2='';
        const base=10;
        const rep = Math.trunc(num /base);
        if(mod!=0){
            console.log(base,rep);
            for(var i=0;i<rep;i++){
                val1 = getBase(base);
                romanNumber += val1;
            }
            console.log(romanNumber);
            val2 = getBase(mod);
            console.log(val2);
            return romanNumber += val2;
        }else{
            for(var i=0;i<rep;i++){
                val1 = getBase(base);
                romanNumber += val1;
            }
            return romanNumber
        }
    }
}