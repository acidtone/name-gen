export const colur = {
  setRandomHue:  function() {
    document.querySelector(':root').style.setProperty('--hue',Math.floor(Math.random() * Math.floor(360)));
  }
}
