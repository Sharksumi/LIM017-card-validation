const validator = {
  isValid: function (creditCardNumber){
    for(let caracteres = 0; caracteres < creditCardNumber.lenght; caracteres++) {
      let digitoPorDos;
      if ((caracteres%2) == 0) { //si la posicion es par
          digitoPorDos =  creditCardNumber[caracteres]*2;
          if (digitoPorDos>9){
            let sumaDeDosDigitos = digitoPorDos[0] + digitoPorDos[1];
            digitoPorDos = sumaDeDosDigitos;
          }
      }
      creditCardNumber[caracteres] = digitoPorDos;
    }
    let sumaTotal = 0;
    for (let i = 0; i < creditCardNumber.lengh; i++ ){
      sumaTotal += creditCardNumber[i];
    }
    if(sumaTotal [sumaTotal.length - 1] == 0){
      return true;
      }
      else{
        return false;
      }
  }
};

export default validator;