document.getElementById("btn_cifrar").addEventListener("click", function () {
  let msgIngresado = document.getElementById('cifrarTexto').value;
  let desplazar = parseInt(document.getElementById('offset').value);


  document.getElementById('textoCifrado').value += cipher.encode(msgIngresado, desplazar);
  //document.getElementById('textoCifrado').value = cifradoEnAscci;
  //let cifradoEnAscci = '';
})
//variable se declara vacia para que tome otro valor


document.getElementById("btn_descifrar").addEventListener("click", function () {
  let msgIngresado = document.getElementById('cifrarTexto').value;
  let desplazar = parseInt(document.getElementById('offset').value);


  document.getElementById('textoCifrado').value += cipher.decode(msgIngresado, desplazar);
  //document.getElementById('textoCifrado').value = cifradoEnAscci;

});

  document.getElementById('limpiar').addEventListener('click', function () {
      location.reload();
  });
