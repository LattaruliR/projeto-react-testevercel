import crushingAtmosphere from '../assets/SuplasSprites/CrushingAtmosphere1.mp3'
import centipede from '../assets/SuplasSprites/Centipede.mp3'

function SpotifyPlayer() {
  return (
    <section className="spotify-player" aria-label="Música de Rosemary">
      <p className="eyebrow" style={{ textAlign: 'center' }}>
        Rádio de Rosemary!
      </p>
      <p className="home-intro">
        Agora tocando: <strong>???</strong>
      </p>
      <audio controls preload="metadata" src={centipede} autoPlay={true} loop={true}>
        Seu navegador não suporta áudio
      </audio>
    </section>
  )
}

export default SpotifyPlayer
