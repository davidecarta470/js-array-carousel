
const slider = document.querySelector('.slider');
const item = document.getElementsByClassName('item');
// const next = document.querySelector('.next');

let contatore=0;
const next = addEventListener("click", function(){
  contatore++;
  console.log(contatore);
});

const prev = addEventListener("click", function(){
  contatore--;
  console.log(contatore);
});