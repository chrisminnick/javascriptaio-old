const stateButton = document.getElementById('oregonButton');
stateButton.addEventListener('click', () =>
  import('./Listing11-3.js').then((OregonInfo) => {
    alert(`${OregonInfo.stateName}'s state bird is ${OregonInfo.stateBird}.`);
  })
);
