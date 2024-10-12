'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result')

  btn.addEventListener('click', ()=>{
    const n = Math.floor(Math.random() * 3);//nは再代入されないのでconst
    result.textContent = n
  });
}