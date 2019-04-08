window.cipher = {
  encode: (msgIngresado, desplazar) => {
    let cifradoEnAscci = '';
    //variable se declara vacia para que tome otro valor

    for (let i = 0; i <= msgIngresado.length; i++) {
      let cesar = msgIngresado.charCodeAt(i);
      if (cesar >= 65 && cesar <= 90) {
        cifradoEnAscci += String.fromCharCode(((cesar - 65 + desplazar) % 26) + 65);
        //cifradoEnAscci es igual a vacio + el cifrado 
      } else if ((cesar >= 97) && (cesar <= 122)) {
        cifradoEnAscci += String.fromCharCode(((cesar - 97 + (desplazar)) % 26) + 97);
      } else if (cesar == 32) {
        cifradoEnAscci += String.fromCharCode(cesar);
      }


    }
    return cifradoEnAscci;
  },

  decode: (msgIngresado, desplazar) => {

    let cifradoEnAscci = '';

    //variable se declara vacia para que tome otro valor
    for (let i = 0; i <= msgIngresado.length; i++) {
      let cesar = msgIngresado.charCodeAt(i);
      if ((cesar >= 65) && (cesar <= 90)) {
        cifradoEnAscci += String.fromCharCode(((cesar - 90 - desplazar) % 26) + 90);
        //cifradoEnAscci es igual a vacio + el cifrado 
      } else if ((cesar >= 97) && (cesar <= 122)) {
        cifradoEnAscci += String.fromCharCode(((cesar - 122 - desplazar) % 26) + 122);
      } else if (cesar == 32) {
        cifradoEnAscci += String.fromCharCode(cesar);
      }

    }


    return cifradoEnAscci;
  }
};
