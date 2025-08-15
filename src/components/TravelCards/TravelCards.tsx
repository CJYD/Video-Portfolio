import { useState } from 'react';
import { TravelLocation } from '../../data/travelLocations';
import './TravelCards.css';

interface TravelCardsProps {
  locations: TravelLocation[];
}

const TravelCards = ({ locations }: TravelCardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);

  const nextCard = () => {
    if (!isTransitioning) {
      setDirection('next');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % locations.length);
        setIsTransitioning(false);
        setDirection(null);
      }, 600);
    }
  };

  const prevCard = () => {
    if (!isTransitioning) {
      setDirection('prev');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + locations.length) % locations.length);
        setIsTransitioning(false);
        setDirection(null);
      }, 600);
    }
  };

  const getCardIndex = (offset: number) => {
    return (currentIndex + offset + locations.length) % locations.length;
  };

  // Calculate how many cards to show in the stack
  const maxVisibleCards = 3;

  return (
    <section className="travel-cards-section">
      <div className="cards-container">
        <div className={`cards-stack ${direction ? `transitioning-${direction}` : ''}`}>
          {/* Render cards in stack, from back to front */}
          {[...Array(maxVisibleCards)].map((_, stackPosition) => {
            const cardIndex = getCardIndex(maxVisibleCards - 1 - stackPosition);
            const isMainCard = stackPosition === maxVisibleCards - 1;
            const depthLevel = maxVisibleCards - stackPosition; // 3, 2, 1 (back to front)
            
            return (
              <div 
                key={`stack-${stackPosition}`}
                className={`travel-card stacked-card ${isMainCard ? 'main-card' : `depth-${depthLevel} background-card`} ${isTransitioning ? 'transitioning' : ''}`}
              >
                <div 
                  className="card-image"
                  style={{ backgroundImage: `url(${locations[cardIndex].imageUrl})` }}
                >
                  {isMainCard && (
                    <>
                      <div className="card-overlay">
                        <div className="card-content">
                          <span className={`card-status ${locations[cardIndex].status}`}>
                            {locations[cardIndex].status === 'visited' ? 'Visited' : 'Upcoming'}
                          </span>
                          <h3 className="card-title">{locations[cardIndex].name}</h3>
                          <p className="card-location">{locations[cardIndex].location}</p>
                          <p className="card-date">{locations[cardIndex].month} {locations[cardIndex].year}</p>
                        </div>
                      </div>
                      {/* Invisible click zones for navigation */}
                      <div className="card-click-zones">
                        <button 
                          className="click-zone click-zone-left" 
                          onClick={prevCard}
                          aria-label="Previous location"
                        />
                        <button 
                          className="click-zone click-zone-right" 
                          onClick={nextCard}
                          aria-label="Next location"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Navigation controls - moved outside of cards-stack */}
        <div className="stack-navigation">
          <button 
            className="nav-button nav-prev" 
            onClick={prevCard}
            aria-label="Previous location"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="nav-dots">
            {locations.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  if (!isTransitioning && index !== currentIndex) {
                    setDirection(index > currentIndex ? 'next' : 'prev');
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsTransitioning(false);
                      setDirection(null);
                    }, 600);
                  }
                }}
                aria-label={`Go to ${locations[index].name}`}
              />
            ))}
          </div>
          <button 
            className="nav-button nav-next" 
            onClick={nextCard}
            aria-label="Next location"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelCards;