const validator = {
  isValid: function (creditCardNumber) {
    if (creditCardNumber.length == 13 && creditCardNumber.length == 19){
        let imparPorDos =  creditCardNumber[0]*2
          if (imparPorDos>9){
            let sumaDeDosDigitos = imparPorDos[0] + imparPorDos[1];
            imparPorDos = sumaDeDosDigitos;
          }
      creditCardNumber[0] = imparPorDos;


        imparPorDos =  creditCardNumber[2]*2;
          if (imparPorDos>9){
            let sumaDeDosDigitos = imparPorDos[0] + imparPorDos[1];
            imparPorDos = sumaDeDosDigitos;
          }
      creditCardNumber[2] = imparPorDos

      imparPorDos =  creditCardNumber[4]*2;
          if (imparPorDos>9){
            let sumaDeDosDigitos = imparPorDos[0] + imparPorDos[1];
            imparPorDos = sumaDeDosDigitos;
          }
      creditCardNumber[4] = imparPorDos;

      imparPorDos =  creditCardNumber[6]*2;
          if (imparPorDos>9){
            let sumaDeDosDigitos = imparPorDos[0] + imparPorDos[1];
            imparPorDos = sumaDeDosDigitos;
          }
      creditCardNumber[6] = imparPorDos;

      imparPorDos =  creditCardNumber[8]*2
          if (imparPorDos>9){
            let sumaDeDosDigitos = imparPorDos[0] + imparPorDos[1];
            imparPorDos = sumaDeDosDigitos;
          }
      creditCardNumber[8] = imparPorDos;

      imparPorDos =  creditCardNumber[10]*2;
          if (imparPorDos>9){
            let sumaDeDosDigitos = imparPorDos[0] + imparPorDos[1];
            imparPorDos = sumaDeDosDigitos;
          }
      creditCardNumber[10] = imparPorDos;

      imparPorDos =  creditCardNumber[12]*2;
          if (imparPorDos>9){
            let sumaDeDosDigitos = imparPorDos[0] + imparPorDos[1];
            imparPorDos = sumaDeDosDigitos;
          }
      creditCardNumber[12] = imparPorDos;

      imparPorDos =  creditCardNumber[14]*2;
          if (imparPorDos>9){
            let sumaDeDosDigitos = imparPorDos[0] + imparPorDos[1];
            imparPorDos = sumaDeDosDigitos;
          }
      creditCardNumber[2] = imparPorDos;

      parseInt(creditCardNumber[0]) + parseInt(creditCardNumber[1]) + parseInt(creditCardNumber[2]) + parseInt(creditCardNumber[3]) + parseInt(creditCardNumber[4]) + parseInt(creditCardNumber[5]) + parseInt(creditCardNumber[6]) + parseInt(creditCardNumber[7]) + parseInt(creditCardNumber[8]) + parseInt(creditCardNumber[9]) + parseInt(creditCardNumber[10]) + parseInt(creditCardNumber[11]) + parseInt(creditCardNumber[12]) + parseInt(creditCardNumber[13]) + parseInt(creditCardNumber[14]) + parseInt(creditCardNumber[15])

    }
    return false;
},
maskify: function(creditCardNumber) {return "1234"}
};


export default validator;