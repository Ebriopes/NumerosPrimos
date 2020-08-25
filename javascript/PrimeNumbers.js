function primee(){
  //establecemos las variables
  primeS = +document.getElementById('selPrime').value;
  baseData = [2];
  base = 3;
  i=0;

  //Comineza el Script
  switch (true) {
    //Si escojemos uno como opción
    case (primeS === 1):
      document.getElementById('res').innerHTML='The first Number is: ' + 2;
	  break;
	  
    //si escojemos un número mayor a 1
    case (primeS>1):
      let primNum = '';
      //bucle que cesa hasta tner la cantidad de digitos especificados
      while(primeS > baseData.length){
        //bucle que cesa cuando un numero no es primo
        while(base % baseData[i] !== 0 ){
          i++;
          //condición que hace cambiar el número probado cuando se ha
          //comprobado que es un número primo, y resetea el contador
          if(i == baseData.length){
            baseData.push(base);
            i=0;
            base += 2;
          //Condición que sale del bucle cuando se alcanzó la cantidad 
          //digitos solicitada
          }else if(primeS == baseData.length){
            break;
          }
        }
        //Aumento en caso de que se pruebe un número no primo
        base +=2;
      };
      for (const num in baseData) {
        primNum += '<label>' + baseData[num] + '</label>  ';
      };
      document.getElementById('res').innerHTML='The Numbers are: <br> <div>' + primNum + '</div>';
      break;
    default:
      document.getElementById('res').innerHTML='Apparently you didn\'t use numbers. :c';
  };
};

