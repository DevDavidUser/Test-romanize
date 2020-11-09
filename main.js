  //Primicia : convertir un numero arabe a romano
  // Escribir test 
  function checkroman(){
      console.log("test start");
      try{
        const number=13;
        const romnumber = romanize(number); 
        const result = 'XIII';
        if(romnumber === result){
            console.log("test pass " + romnumber +" equals "+result);
        }
      }catch(err){
          console.log("test failed " +err);
      }
  }
  //Escribir codigo funcional
  var romanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  function romanize(num){
     if (num === 0) {
        return '';
      }
     for (var i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
            return romanMatrix[i][1] + romanize(num-romanMatrix[i][0]);
        }  
     }
   }
  checkroman();

