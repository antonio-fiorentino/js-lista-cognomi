var listaOutput = document.getElementById('lista-cognomi');
var cognome = prompt("Qual'è il suo Cognome");
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Verdi', 'Balsano'];
var numero = document.getElementById('numero');

var contenutoPrecedente;
listaCognomi.push(cognome);
for (var i = 0; i < listaCognomi.length; i++) {

  contenutoPrecedente = listaOutput.innerHTML;
  listaOutput.innerHTML = contenutoPrecedente + '<li>' + listaCognomi[i] + '</li>';
  listaCognomi.sort();
  var ordine = listaCognomi.indexOf(cognome)
}
numero.innerText = (ordine + 1);
