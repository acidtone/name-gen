import { nouns } from './nouns.mjs';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomPhrase(count, list) {
  let phrase = '';
  for (let i = 0; i<count; i++) {
    phrase += list[getRandomInt(list.length)]+' ';
  }
  return phrase;
}

function init() {
  var output = document.querySelector('output');

  output.value = randomPhrase(2, nouns);

  document.querySelector('body').addEventListener('click', function(){
    output.value = randomPhrase(2, nouns);
  });
}

document.addEventListener('load',init());
