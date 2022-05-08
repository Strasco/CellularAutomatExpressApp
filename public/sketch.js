const height = 500;
const width = 500;

function setup() {
  createCanvas(height, width);
  pixelDensity(1);
  loadPixels();
  randomizeCanvas();
  updatePixels();
}

const vlad = () => {
  console.log("vlad");
};

const iterateCells = () => {
  var pixels2 = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (findNeighbours(x, y) > 4) {
        pixels2.push(0);
        pixels2.push(0);
        pixels2.push(0);
        pixels2.push(255);
      } else {
        pixels2.push(255);
        pixels2.push(255);
        pixels2.push(255);
        pixels2.push(255);
      }
    }
  }
  for (let index = 0; index < pixels2.length; index++) {
    pixels[index] = pixels2[index];
  }
  updatePixels();
};

function getPixel(x, y) {
  return (x + y * width) * 4;
}

function randomizeCanvas() {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let color = 0;
      const value = Math.random() * 100;
      color = value > 40 ? 0 : 255;
      var index = (x + y * width) * 4;
      pixels[index] = color;
      pixels[index + 1] = color;
      pixels[index + 2] = color;
      pixels[index + 3] = 255;
    }
  }
}

function findNeighbours(x, y) {
  const neighbourLeft = (x - 1 + y * width) * 4;
  const neighbourTopLeft = (x - 1 + (y - 1) * width) * 4;
  const neighbourTop = (x + (y + 1) * width) * 4;
  const neighbourTopRight = (x + 1 + (y + 1) * width) * 4;
  const neighbourRight = (x + 1 + y * width) * 4;
  const neighbourBottomRight = (x + 1 + (y - 1) * width) * 4;
  const neighbourBottom = (x + (y - 1) * width) * 4;
  const neighbourBottomLeft = (x - 1 + (y - 1) * width) * 4;
  var neighbours = [
    neighbourLeft,
    neighbourTopLeft,
    neighbourTop,
    neighbourTopRight,
    neighbourRight,
    neighbourBottomRight,
    neighbourBottom,
    neighbourBottomLeft,
  ];
  if (x + 1 >= width || y + 1 > height || x - 1 < 0 || y - 1 < 0) {
    return 10;
  }
  return countBlack(neighbours);
}

function countBlack(neighbours) {
  var black = 0;
  for (let index = 0; index < neighbours.length; index++) {
    if (pixels[neighbours[index]] === 0) {
      black++;
    }
    if (pixels[neighbours[index]] === undefined) {
      black = 5;
    }
  }
  return black;
}
