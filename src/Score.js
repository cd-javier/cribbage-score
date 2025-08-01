export default class Score {
  constructor() {
    this.p1 = 0;
    this.p2 = 0;
    this.log = [[0, 0]];
  }

  addP1(points) {
    this.p1 += points;
    this.log.push([this.p1, this.p2]);
  }
  addP2(points) {
    this.p2 += points;
    this.log.push([this.p1, this.p2]);
  }

  undo() {
    if (this.log.length === 1) return;
    this.log.pop();
    [this.p1, this.p2] = this.log[this.log.length - 1];
  }

  restart() {
    this.log = [[0, 0]];
    [this.p1, this.p2] = [0, 0];
  }

  get currentScore() {
    return [this.p1, this.p2];
  }
}
