function SiteHeader({ page, onHome, onNavigate }) {
  return (
    <header className="site-header">
      <button className="wordmark" onClick={onHome}>
        SUPLAS
        <br />
        <small>ROSEMARY, DN</small>
      </button>
      <nav>
        <button
          className={page === 'lore' ? 'current' : ''}
          onClick={() => onNavigate('lore')}
        >
          Lore
        </button>
        <button
          className={page === 'mechanics' ? 'current' : ''}
          onClick={() => onNavigate('mechanics')}
        >
          Mecânicas
        </button>
      </nav>
      <span className="header-status">arquivo comunitário</span>
    </header>
  )
}

export default SiteHeader
