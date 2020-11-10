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
checktest(11,'XI');
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
function romanize(num){
    var romanNumber = '';
    
    function filter(num){
        if(num<=10){
            var arraynum = [num];
            return arraynum;
        }else{
            var arraynum = ['10','1'];
            return arraynum;
        }
    }
    var base = filter(num);
    console.log(base.length)
            for(var i=0;i<base.length;i++){
                console.log(base[i]);
                switch (base[i]) {
                    case 1:
                    case 2:
                    case 3:
                        for(i=0; i<base;i++) {
                            romanNumber += 'I';
                        }
                    break;
                    case 4:
                        romanNumber = 'IV';
                    break;
                    case 5:
                        romanNumber = 'V';
                    break;
                    case 6:
                    case 7:
                    case 8:
                        romanNumber = 'V';
                        for(i=0; i<num -5;i++) {
                            romanNumber += 'I';
                        }
        
                    break;
                    case 9:
                        romanNumber = 'IX';
                    break;
                    case 10:
                         romanNumber = 'X';
                    break;
                }
                    console.log(romanNumber); 
            }
    return romanNumber 
}