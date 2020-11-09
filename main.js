  //Primicia : convertir un numero arabe a romano
  // Escribir test 
  function checkroman(){
      console.log("test start");
      try{
        const number = romanize(5); 
        console.log(number);
        console.log("test pass");
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

