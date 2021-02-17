import { nouns } from './nouns.mjs';

// TODO: Add support for adjectives: 
// Multiple adjectives: https://www.gingersoftware.com/content/grammar-rules/adjectives/order-of-adjectives/

export const phraser = {
  generate: function(wordCount = 2) {

    let phrase = [];
    for (let i = 0; i < wordCount; i++) {
      phrase.push(nouns[(Math.floor(Math.random() * Math.floor(nouns.length)))]);
    }

    return phrase.join(' '); 
  }
}
