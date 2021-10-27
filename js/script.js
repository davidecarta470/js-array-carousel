
const slider = document.querySelector('.slider');
const item = document.getElementsByClassName('item');
const itemSmall = document.getElementsByClassName('small-item')
console.log(item[4])

let contatore=0;

const next = document.querySelector('.uarr');
const prev = document.querySelector('.darr');
prev.addEventListener("click", function(){
  item[contatore].classList.remove('active');
  itemSmall[contatore].classList.remove('small-active');
  contatore++;
  if (contatore>item.length-1){
    contatore=0;
  }
  item[contatore].classList.add('active');
  itemSmall[contatore].classList.add('small-active');
});

next.addEventListener("click", function(){
  item[contatore].classList.remove('active');
  itemSmall[contatore].classList.remove('small-active');
  contatore--;
  if (contatore<0){
    contatore=item.length-1;
  }
  item[contatore].classList.add('active'); 
  itemSmall[contatore].classList.add('small-active'); 
});