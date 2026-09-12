import SpotifyPlayer from './SpotifyPlayer'

function HomePage({ onNavigate }) {
  return (
    <main className="home-page">
      <div className="home-mark">SUPLAS</div>
      <div className="home-copy">
        <p className="eyebrow">Rosemary, Dakota do Norte</p>
        <h1>
          Bem-vindo a
          <br />
          <em>Rosemary.</em>
        </h1>
        <p className="home-intro">
          Um pequeno arquivo de histórias, sinais e sistemas da cidade.
        </p>
      </div>
      <div className="home-navigation">
        <p className="eyebrow">Explore o site</p>
        <button onClick={() => onNavigate('lore')}>
          <span>01</span>
          <strong>LORE</strong>
          <small>histórias + teasers <i>↗</i></small>
        </button>
        <button onClick={() => onNavigate('mechanics')}>
          <span>02</span>
          <strong>MECÂNICAS</strong>
          <small>ferramentas da jornada <i>↗</i></small>
        </button>
      </div>
      <SpotifyPlayer />
      <div className="home-footer">
        <span>SUPLAS / ROSEMARY</span>
        <span>DAKOTA DO NORTE</span>
        <span>DESDE 2010</span>
      </div>
    </main>
  )
}

export default HomePage
