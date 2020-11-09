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
  checkroman();
