function greetInSpanish(name) {
  return `Hola, ${name}`;
}

function getUserName(callback) {
  let firstName = prompt('Enter your first name');
  callback(firstName);
}

getUserName(greetInSpanish);
