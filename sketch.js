const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

let picture;
function preload() {
  picture = loadImage("images/UNMe.png");
}

let video;

function setup() {
  createCanvas(800, 800);
  picture.resize(200, 200);
}

function draw() {
  background(0);

  const w = width / picture.width;
  const h = height / picture.height;

  picture.loadPixels();
  for(let i = 0; i < picture.height; i++) {
    for(let j = 0; j < picture.width; j++) {
      const pixelIndex = (i * picture.width + j) * 4;
      const r = picture.pixels[pixelIndex + 0];
      const g = picture.pixels[pixelIndex + 1];
      const b = picture.pixels[pixelIndex + 2];
      
      const greyScale = ceil((r + g + b) / 3);

      noStroke();
      fill(255);
      textSize(w);
      const xCoord = j * w + w / 2;
      const yCoord = i * h + h / 2;
      textAlign(CENTER, CENTER);

      const charIndex = floor(map(greyScale, 255, 0, 0, density.length));
      text(density[charIndex], xCoord, yCoord);
    }
  }
}
