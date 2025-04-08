export class Game {
  public frame: number;
  public pins: number;
  public currentScore: number;
  public step: number;
  public hadStrike: boolean;
  public hadSpare: boolean;

  constructor() {
    this.frame = 0;
    this.pins = 10;
    this.currentScore = 0;
    this.step = 0;
    this.hadSpare = false;
    this.hadStrike = false;
  }

  public roll(pins: number): void {
    switch (this.step) {
      case 0:
        this.handleFirstStep(pins);
        break;
      case 1:
        this.handleSecondStep(pins);
        break;
    }
  }

  public handleFirstStep(pins: number): void {
    if (pins === 10) {
      this.handleStrike(pins);
      return;
    }
    if (this.hadSpare) {
      this.handlePreviousSpare(pins);
    }
    this.step++;
    this.handleRoll(pins);
  }

  public handleSecondStep(pins: number): void {
    if (this.pins - pins === 0) {
      console.log('spare');
      this.handleSpare(pins);
      return;
    }
    this.resetFrame();
    this.handleRoll(pins);
  }

  public handleStrike(pins: number): void {
    this.hadStrike = true;
    this.handleRoll(pins);
    this.resetFrame();
  }

  public handleSpare(pins: number): void {
    this.hadSpare = true;
    this.handleRoll(pins);
    this.resetFrame();
  }

  public handlePreviousSpare(pins: number): void {
    const bonus = pins;
    this.hadSpare = false;
    this.handleRoll(bonus + pins);
  }

  public handleRoll(pins: number): void {
    this.pins -= pins;
    this.currentScore += pins;
  }

  public resetFrame(): void {
    this.step = 0;
    this.frame++;
    this.pins = 10;
  }

  public score(): number {
    return this.currentScore;
  }
}
