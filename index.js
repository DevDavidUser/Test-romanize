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
console.log("test 1 --- el 1 se debe convertir en 1");
//codigo
/*
function romanize(num){
    const romannumbers = [[1,'I']];
    num = romannumbers[0][1];
    return num;
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
    const romannumbers = [[1,'I']];
    if(num === romannumbers[0][0]){
        num = romannumbers[0][1];
    }
    if(num >romannumbers[0][0]){
        num = romannumbers[0][1]+romannumbers[0][1];
    }
    return num;
}
*/
checktest(2,'II');
//codigo refactorizado
function romanize(num){
    const romannumbers = [[1,'I']];
    var result='';
    if( num >= romannumbers[0][0]){
        const rep = num/romannumbers[0][0];
        console.log(rep);
        for(var i=0; i< rep ;i++){
            result += romannumbers[0][1];
        }
    }
    return result;
}
console.log("test 3 --- el 3 se debe convertir en III");
checktest(3,'III');