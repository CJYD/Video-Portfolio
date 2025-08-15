import { useState } from 'react';
import { TravelLocation } from '../../data/travelLocations';
import './Timeline.css';

interface TimelineProps {
  locations: TravelLocation[];
}

const Timeline = ({ locations }: TimelineProps) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Travel & Recording</h2>
      <div className="timeline-table">
        {locations.map((location) => (
          <div key={location.id}>
            <div className="timeline-row" onClick={() => toggleExpand(location.id)}>
              <div className="timeline-year">{location.year}</div>
              <div className="timeline-place">{location.name}</div>
              <div className="timeline-role">{location.role || location.location}</div>
              <div className={`timeline-expand ${expandedIds.has(location.id) ? 'expanded' : ''}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </div>
            {expandedIds.has(location.id) && (
              <div className="timeline-details">
                <p>{location.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;