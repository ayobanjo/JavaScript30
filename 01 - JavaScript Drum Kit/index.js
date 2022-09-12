function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // stops the function from running if data key is not present e.g no data key for key b, wont run
  audio.currentTime = 0; //rewinds to the start for multiple selection or keydown
  audio.play();

  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip if its not a transform
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
