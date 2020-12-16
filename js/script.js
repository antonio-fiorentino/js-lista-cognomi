var listaOutput = document.getElementById('lista-cognomi');
var cognome = prompt("Qual'è il suo Cognome");
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Verdi', 'Balsano', cognome];

var contenutoPrecedente;

for (var i = 0; i < listaCognomi.length; i++) {

  contenutoPrecedente = listaOutput.innerHTML;
  listaOutput.innerHTML = contenutoPrecedente + '<li>' + listaCognomi[i] + '</li>';
}
listaCognomi.sort();
