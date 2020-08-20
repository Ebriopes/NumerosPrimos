function primee(primeS){
  //establecemos las variables
  baseData = [2];
  base = 3;
  i=0;
  //Comineza el Script
  switch (true) {
    //Si escojemos uno como opción
    case (primeS === 1):
      document.write('The first Number is: ' + 2);
      break;
    //si escojemos un número mayor a 1
    case (primeS>1):
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
      }
      document.write('The Numbers are: ' + baseData);
      break;
    default:
      document.write('Apparently don\'t use numbers. :c');
  }
}

primee(15);