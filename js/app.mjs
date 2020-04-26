import { phraser } from './phraser.mjs';

function init() {
  var output = document.querySelector('h1');

  output.innerText = phraser.generate(2);

  document.querySelector('body').addEventListener('click', function(){
    output.innerText = phraser.generate(2);
  });
}

document.addEventListener('load',init());
