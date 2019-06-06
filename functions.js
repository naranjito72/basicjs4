//OPERACIONES
/*crear prompt()
recoger dato (numero, no string)
comparar numero entrada con 67
devolver alert
 */
//miercoles 05/06/19 23:10

 let edadEntrada = prompt("Escriba su edad");
//recordar el utilizar parseInt para traducir el caracter a numero

edadEntrada = parseInt(edadEntrada);

 console.log(edadEntrada);
 //registra el numero y no muestra error
  // iba a utilizar un let para la jubilacion, funcionara?

  let jubilado = 67;
  // debo restar a 67 la edadEntrada
 //separa caracteres!!!
 //let separado = alert();
 //separadorDeFrase = separado.split('');
//no consigo separar la frase!!
//el espacio en las comitas pelotudo!

  alert("Te quedan" + " " + (jubilado - edadEntrada) + " " + "años para la jubilación.");

 