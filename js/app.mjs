import { phraser } from './phraser.mjs';
import { colur } from './colur.mjs';

function init() {
  var output = document.querySelector('h1');

  output.innerText = phraser.generate(2);
  colur.setRandomHue();

  document.querySelector('body').addEventListener('click', function(){
    output.innerText = phraser.generate(2);
    colur.setRandomHue();
  });
}

document.addEventListener('load',init());
