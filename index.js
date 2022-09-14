let god = Number(prompt('Unesi godine'));
if (Number.isNaN(god)) {
  console.log('Nste uneli broj');
}
if (god >= 18) {
  console.log('Punoletni ste');
} else {
  console.log('Niste puoletni');
}
