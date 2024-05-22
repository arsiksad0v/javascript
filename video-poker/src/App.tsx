import React, { useState } from 'react';
import CardComponent from './Card';  
import CardDeck from './lib/CardDeck';
import PokerHand from './lib/PokerHand';
import Card from './lib/Card';  

const App: React.FC = () => {
  const [hand, setHand] = useState<Card[]>([]); 
  const [outcome, setOutcome] = useState<string>('');

  const dealCards = () => {
    const deck = new CardDeck();
    const newHand = deck.getCards(5);
    setHand(newHand);

    const pokerHand = new PokerHand(newHand);
    setOutcome(pokerHand.getOutcome());
  };

  return (
    <div>
      <button onClick={dealCards}>Раздать карты</button>
      {hand.length > 0 && (
        <div>
          <div className="playingCards faceImages">
            {hand.map((card, index) => (
              <CardComponent key={index} rank={card.rank} suit={card.suit} /> 
            ))}
          </div>
          <p>Outcome: {outcome}</p>
        </div>
      )}
    </div>
  );
};

export default App;

