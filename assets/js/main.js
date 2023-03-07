// Chiedere all'utente il suo nome
const userName = prompt ("inserisci il tuo nome");
console.log(userName);

// Chiedere all'utente il suo cognome 
const userSurname = prompt ("inserisci il tuo cognome");
console.log(userSurname);

// Chiedere all'utente il suo colore preferito 
const userColor = prompt ("inserisci il tuo colore preferito");
console.log(userColor);

// Aggiungere numero 23
const number = '23';

const html = 
document.getElementById('utente');

// Aggiungere Nome, Cognome, Colore preferito e numero 23 tutt0 attaccat0
let sentence = `${userName}${userSurname}${userColor}${number}`;
console.log(sentence);

// Assegno l'innerHTMML a sentence
html.innerHTML = sentence;