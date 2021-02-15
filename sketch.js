let hearts = [];
let fallingHearts = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  hearts[0] = new Heart(width / 2, height / 2);
  for (let i = 0; i < 100; i++) {
    fallingHearts.push(new HeartRain());
  }

  textFont('Times');
  textAlign(CENTER, CENTER);
}

function draw() {
  background('#fef9ff');
  for (let i = 0; i < fallingHearts.length; i++) {
    fallingHearts[i].update();
    fallingHearts[i].render();
  }

  for (let heart of hearts) {
    heart.update();
    heart.render();
  }

  noStroke();
  fill(255);
  textSize(hearts[0].pulse * 25)
  text("Happy Valentine's Day", width / 2, (height / 2))
}
