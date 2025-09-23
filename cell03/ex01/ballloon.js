const balloon = document.getElementById("balloon");

let size = 200;
let colors = ["red", "green", "blue"];
let colorIndex = 0;
let shrinkInterval = null;

function updateBalloon() {
  balloon.style.width = size + "px";
  balloon.style.height = size + "px";
  balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener("click", () => {
  size += 10;
  colorIndex = (colorIndex + 1) % colors.length;

  if (size > 420) {
    size = 200;
    colorIndex = 0;
  }

  updateBalloon();
});

balloon.addEventListener("mouseleave", () => {
  if (shrinkInterval) return;
  shrinkInterval = setInterval(() => {
    if (size > 200) {
      size -= 5;
      updateBalloon();
    } else {
      clearInterval(shrinkInterval);
      shrinkInterval = null;
    }
  }, 100);
});

balloon.addEventListener("mouseenter", () => {
  if (shrinkInterval) {
    clearInterval(shrinkInterval);
    shrinkInterval = null;
  }
});

updateBalloon();