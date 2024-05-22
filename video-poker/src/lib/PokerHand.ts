import Card from './Card';

class PokerHand {
  cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  getOutcome(): string {
    const isFlush = this.cards.every(card => card.suit === this.cards[0].suit);

    if (isFlush) {
      return 'Flush';
    }

    return 'High Card';
  }
}

export default PokerHand;
