function makeNumberedList() {
  let numberedList = '<ol>';
  for (let i = 0; i < arguments.length - 1; i++) {
    numberedList += `<li>${arguments[i]}</li>`;
  }
  numberedList += '</ol>';
  return numberedList;
}
