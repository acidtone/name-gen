import { phraser } from './phraser.mjs';
import { colour } from './colour.mjs';

function init() {
  var h1 = document.querySelector('h1');

  h1.innerText = phraser.generate(2);
  colour.setRandomHue();

  document.querySelector('body').addEventListener('click', function(){
    h1.innerText = phraser.generate(2);
    colour.setRandomHue();
  });
}

document.addEventListener('load',init());
