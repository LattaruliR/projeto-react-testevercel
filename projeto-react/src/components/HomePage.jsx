import SpotifyPlayer from './SpotifyPlayer'

function HomePage({ onNavigate }) {
  return (
    <main className="home-page">
      <div className="home-mark">//////////////////O\</div>
      <div className="home-copy">
        <p className="eyebrow">Cidade de Rosemary, Dakota do Norte</p>
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
        <p className="eyebrow" style={{ textAlign: 'center' }}>
          Opções
        </p>
        <button onClick={() => onNavigate('lore')}>
          <span></span>
          <strong>NOTÍCIAS</strong>
          <small>Gazeta das notícias mais importantes em Rosemary.</small>
        </button>
        <button onClick={() => onNavigate('mechanics')}>
          <span></span>
          <strong>MECÂNICAS</strong>
          <small>Ferramentas úteis para o RPG. <br></br>Sim, quebrei a imersão para informar isso.</small>
        </button>
      </div>
      <SpotifyPlayer />
    </main>
  )
}

export default HomePage
