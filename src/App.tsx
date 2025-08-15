import { useState, useEffect } from 'react'
import VideoGrid from './components/VideoGrid'
import VideoPlayer from './components/VideoPlayer'
import TravelCards from './components/TravelCards'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import { Video } from './types'
import { videos } from './data/videos'
import { getSortedLocations } from './data/travelLocations'
import './styles/App.css'

function App() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })
  
  const sortedLocations = getSortedLocations()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    
    // Set background color on both html and body to handle overscroll
    if (darkMode) {
      document.documentElement.style.backgroundColor = '#1a1a1a'
      document.body.style.backgroundColor = '#1a1a1a'
    } else {
      document.documentElement.style.backgroundColor = '#f2f2f2'
      document.body.style.backgroundColor = '#f2f2f2'
    }
  }, [darkMode])

  return (
    <div className="app">
      <main className="main-content">
        <div className="site-header">
          <span className="site-name">christian duque</span>
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <svg className="toggle-icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg className="toggle-icon moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-intro">
                I'm Christian, a visual storyteller based in exploration.
              </p>
              <p>
                I love capturing authentic moments that make people feel "wow, I'm there."
                I've spent years documenting our world through film – from misty mountain peaks to 
                vibrant city streets, turning fleeting moments into timeless narratives. 
                Check out some selected work below.
              </p>
            </div>
            <div className="status-container">
              <div className="status-pill">
                <span className="status-dot"></span>
                <span className="status-text">Recording</span>
              </div>
            </div>
          </div>
        </section>

        <TravelCards locations={sortedLocations} />
        
        <Timeline locations={sortedLocations} />

        <VideoGrid 
          videos={videos} 
          onVideoSelect={setSelectedVideo}
        />
        
        <Footer />
      </main>

      {selectedVideo && (
        <VideoPlayer 
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  )
}

export default App