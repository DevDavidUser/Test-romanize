//greet TDD
function checktest(msg,name){
    const output = greet(name);
    if(output === msg){
        console.log("pass");
    }else{
        console.log("fail");
    }
}
//case 1
console.log("test 1 --- se devuelve Hello,Bob cuando es Bob el name.");
/*
function greet(name){
    return "Hello, "+name+'.'
}
*/
checktest('Hello, Bob.', 'Bob');
//case 2
console.log("test 2 --- se devuelve Hello,my friend cuando es null el name.");
/*
function greet(name){
    if(name.length>0){
        return "Hello, "+name+'.'
    }else{
        return "Hello, my friend."
    }
}
*/
checktest('Hello, my friend.','');
//case 2
console.log("test 3 --- se devuelve HELLO, JERRY! cuando es uppercase el name.");
/*
function greet(name){
        if(name.length>0){
            if(name.toUpperCase() === name){
                return 'HELLO, '+name+'!'
            }else{
                return "Hello, "+name+'.' 
            }
        }else{
            return "Hello, my friend."
        }
}
*/
checktest('HELLO, JERRY!','JERRY');
console.log("test 4 --- se devuelve Hello, Jill and Jane. cuando se ingresa dos name.");
/*
function greet(name){
    console.log(typeof(name));
    if(typeof(name) === 'string'){
        if(name.length>0){
            if(name.toUpperCase() === name){
                return 'HELLO, '+name+'!'
            }else{
                return "Hello, "+name+'.' 
            }
        }else{
            return "Hello, my friend."
        }
    }else{
        return 'Hello, '+name[0]+" and "+name[1]+"."
    }
}
*/
checktest('Hello, Jill and Jane.',["Jill", "Jane"]);
console.log("test 5 --- Hello, Amy, Brian, and Charlotte. cuando se ingresa mas de dos name.");
function greet(name){
    if(typeof(name) === 'string'){
        if(name.length>0){
            if(name.toUpperCase() === name){
                return 'HELLO, '+name+'!'
            }else{
                return "Hello, "+name+'.' 
            }
        }
            return "Hello, my friend."
    }else{
        if(name.length >2){
            let msg = 'Hello, ';
            for(var i=0;i<name.length-1;i++){
                msg += name[i]+", "
            }
            return msg +"and "+ name[name.length-1]+"."
        }
        return 'Hello, '+name[0]+" and "+name[1]+"."
    }
}
checktest("Hello, Amy, Brian, and Charlotte.",["Amy", "Brian", "Charlotte"]);