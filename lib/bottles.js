import { capitalize, downTo } from './helpers';

export class Bottles {
  constructor() {}

  verse(number) {
    return (
      `${this.firstVerse(number) + this.secondVerse(number - 1)}`
    );
  }

  firstVerse(number) {
    const bottleLabel = this.bottleLabel(number);
    let currentBottles = this.bottlesNumber(number);
   
    return (
      `${currentBottles === 'no more' ? 
        capitalize(currentBottles) : currentBottles} ${bottleLabel} of beer on the wall, ` +
      `${currentBottles} ${bottleLabel} of beer.\n`
    );
  }

  secondVerse(number) {
    return number === -1
      ? 'Go to the store and buy some more, ' +
          '99 bottles of beer on the wall.\n'
      : `Take ${this.pronoun(number)} down and pass it around, ` +
          `${this.bottlesNumber(number)} ${this.bottleLabel(number)} ` +
          'of beer on the wall.\n';
  }

  verses(start, end) {
    const range = downTo(start, end);
    return range.map((number) => this.verse(number)).join('\n');
  }

  song() {
    return this.verses(99, 0);
  }

  pronoun(number) {
    return number === 0 ? 'it' : 'one';
  }

  bottleLabel(number) {
    return number === 1 ? 'bottle' : 'bottles';
  }

  bottlesNumber(number) {
    return number > 0 ? number : 'no more';
  }
}
