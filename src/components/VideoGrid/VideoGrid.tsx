import { Video } from '../../types'
import './VideoGrid.css'

interface VideoGridProps {
  videos: Video[]
  onVideoSelect: (video: Video) => void
}

const VideoGrid = ({ videos, onVideoSelect }: VideoGridProps) => {
  const getThumbnailUrl = (youtubeId: string) => {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
  }

  return (
    <section className="video-grid-section">
      <div className="video-grid">
        {videos.map((video) => (
          <article 
            key={video.id} 
            className="video-card"
            onClick={() => onVideoSelect(video)}
          >
            <div className="video-thumbnail">
              <img 
                src={video.thumbnail || getThumbnailUrl(video.youtubeId)} 
                alt={video.title}
                loading="lazy"
              />
              <div className="play-overlay">
                <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default VideoGrid