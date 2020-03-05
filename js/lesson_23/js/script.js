'use strict';

let btn = document.querySelector('.btn'),
    box = document.querySelector('.box');

function myAnim() {
  let pos = 0;

  let id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      box.style.top = pos + 'px';
      box.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', myAnim);


let btnBlock = document.querySelector('.btn-block'),
    btns = document.querySelectorAll('button');

btnBlock.addEventListener('click', function(event) {
  if (event.target && event.target.tagName == 'BUTTON'){
    console.log('hi');
  }

  // if (event.target && event.target.classList.contains('first')){
  //   console.log('hi');
  // }

  // if (event.target && event.target.matches('button.first')){
  //   console.log('hi');
  // }
});