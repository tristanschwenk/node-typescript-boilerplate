export class Game {
  private frame: number;
  private pins: number;
  private currentScore: number;
  private step: number;
  private hadStrike: boolean;
  private hadSpare: boolean;

  constructor() {
    this.frame = 0;
    this.pins = 0;
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
    this.step++;
    this.handleRoll(pins);
  }

  public handleSecondStep(pins: number): void {
    if (this.pins + pins === 10) {
      this.handleSpare(pins);
      return;
    }
    this.step = 0;
    this.frame++;
    this.handleRoll(pins);
  }

  public handleStrike(pins: number): void {
    this.hadStrike = true;
    this.step = 0;
    this.frame++;
    this.handleRoll(pins);
  }

  public handleSpare(pins: number): void {
    this.hadSpare = true;
    this.step = 0;
    this.frame++;
    this.handleRoll(pins);
  }

  public handleRoll(pins: number): void {
    this.pins -= pins;
    this.frame++;
    this.currentScore += pins;
  }

  public score(): number {
    return this.currentScore;
  }
}
