function prime(limit) {
  //establecemos las variables
  const baseData = [2];
  let base = 3;

  //bucle que cesa hasta tner la cantidad de digitos especificados
  for (let i = 0; limit > baseData.length; i++) {
    //condición que hace cambiar el número probado cuando se ha
    //comprobado que es un número primo, y resetea el contador
    if (baseData[i] === undefined) {
      baseData.push(base);
      i = 1;
      base += 2;
    }
    //Aumento en caso de que se pruebe un número no primo
    if (base % baseData[i] === 0) base += 2;
  };

  return baseData;
};

groupNum = (limit,group) => {
  let primNum = '<div>';

  prime(limit).forEach( (element,index) => {
    if (index % group === 0) primNum += `</div><button class="collapsible" onclick="collapse(this)">${index}-${index+group}</button><div class="content">`;
    primNum += `<span>${element}</span> `;
  });

  primNum += '</div>';
  return primNum;
}

printNum = () => {
  const limit = +document.getElementById('selPrime').value;
  const group = 20;
  if (limit === 1) {
    document.getElementById('res').innerHTML = 'The first Number is: ' + 2;
  } else {
    res.innerHTML = `The Numbers are: <br> <div>${groupNum(limit,group)}</div>`;
  }
}