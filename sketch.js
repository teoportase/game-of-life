const GRID_SQUARES = 25;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("gray");

  // Draw grid
  for (let i=0; i < width; i += width/GRID_SQUARES) {
    for (let j=0; j < height; j += height/GRID_SQUARES) {
      stroke(0);
      strokeWeight(1);
      line(i, 0, i, height);
			line(0, j, width, j);
    }
  }
}
