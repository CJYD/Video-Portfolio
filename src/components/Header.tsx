import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">Christian Duque</div>
        <div className="nav-links">
          <a href="mailto:your@email.com" className="nav-link">Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Header