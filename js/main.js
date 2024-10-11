'use strict'
{
  const button = document.querySelector('button');
  const result = document.querySelector('p');
  const fortune = ['大吉', '中吉', '吉', '凶'];

  button.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * 4);
    result.textContent = fortune[random];
  })

}