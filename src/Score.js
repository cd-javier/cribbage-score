export default class Score {
  constructor() {
    this.p1 = 0;
    this.p2 = 0;
    this.log = [[0, 0]];
  }

  addP1(points) {
    if (this.theresAWinner) return;
    const newScore = this.p1 + points;
    if (newScore < 121) {
      this.p1 = newScore;
      this.log.push([this.p1, this.p2]);
    } else {
      this.p1 = 121;
      this.log.push([this.p1, this.p2]);
      return 'winner';
    }
  }
  addP2(points) {
    if (this.theresAWinner) return;
    const newScore = this.p2 + points;
    if (newScore < 121) {
      this.p2 = newScore;
      this.log.push([this.p1, this.p2]);
    } else {
      this.p2 = 121;
      this.log.push([this.p1, this.p2]);
      return 'winner';
    }
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

  get theresAWinner() {
    return this.p1 === 121 || this.p2 === 121;
  }
}
