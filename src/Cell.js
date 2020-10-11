export default class Cell {
  static WALL = 0;
  static PATH = 1;

  constructor(x, y, canvas) {
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.state = Cell.PATH;
  }

  draw() {
    let { p5, width, height, resolution } = this.canvas;
    let xStep = width / resolution;
    let yStep = height / resolution;

    let xOffset = -5;
    let yOffset = -5;
    let mouseOver =
      p5.mouseX + xOffset >= this.x * xStep &&
      p5.mouseX + xOffset <= this.x * xStep + xStep &&
      p5.mouseY + yOffset >= this.y * yStep &&
      p5.mouseY + yOffset <= this.y * yStep + yStep;

    p5.noStroke();

    switch (this.state) {
      case Cell.WALL:
        p5.fill("#222");
        break;
      case Cell.PATH:
        p5.fill("#DDD");
        break;
    }

    p5.rect(this.x * xStep, this.y * yStep, xStep, yStep);

    if (mouseOver) {
      p5.fill("#BAD");
      p5.rect(
        this.x * xStep + (xStep * 0.333) / 2,
        this.y * yStep + (yStep * 0.333) / 2,
        xStep - xStep * 0.333,
        yStep - yStep * 0.333
      );
    }
  }

  changeState(newState) {
    this.state = newState;
  }
}