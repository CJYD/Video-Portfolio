import { useState } from 'react'
import Header from './components/Header'
import VideoGrid from './components/VideoGrid'
import VideoPlayer from './components/VideoPlayer'
import { Video } from './types'
import './App.css'

// Sample data - replace with your actual YouTube video IDs and details
const videos: Video[] = [
  {
    id: '1',
    youtubeId: 'dQw4w9WgXcQ', // Replace with your video ID
    title: 'Short Film Title',
    description: 'A brief description of this piece',
    thumbnail: '', // YouTube thumbnails are auto-generated
  },
  // Add more videos here
]

function App() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <section className="hero">
          <h1 className="hero-title">Film Portfolio</h1>
          <p className="hero-subtitle">A collection of visual stories</p>
        </section>

        <VideoGrid 
          videos={videos} 
          onVideoSelect={setSelectedVideo}
        />
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