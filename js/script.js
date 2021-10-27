
const slider = document.querySelector('.slider');
const item = document.getElementsByClassName('item');
// const next = document.querySelector('.next');

let contatore=0;

const next = document.querySelector('.uarr');
const prev = document.querySelector('.darr');
next.addEventListener("click", function(){

  contatore++;
  console.log(contatore);
});

prev.addEventListener("click", function(){
  
  contatore--;
  console.log(contatore);
});