const dt = new Date();
const hours = dt.getHours();
let message;
hours < 12 ? (message = 'Good morning!') : (message = 'Welcome');
console.log(message);
