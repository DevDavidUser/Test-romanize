  //Primicia : convertir un numero arabe a romano
  // Escribir test 
  function checkroman(){
      console.log("test start");
      try{
        const number=5;
        const romnumber = romanize(number); 
        const result = 'V';
        if(romnumber === result){
            console.log("test pass " + romnumber +" equals "+result);
        }
      }catch(err){
          console.log("test failed " +err);
      }
  }
  //Escribir codigo funcional
  var romanMatrix = [
    [5, 'V']
  ];
  function romanize(num){
     if (num >= romanMatrix[0][0]) {
        return romanMatrix[0][1];
     }  
   }
  checkroman();

