import crushingAtmosphere from '../assets/SuplasSprites/CrushingAtmosphere1.mp3'

function SpotifyPlayer() {
  return (
    <section className="spotify-player" aria-label="Música de Rosemary">
      <p className="eyebrow">Rádio Rosemary</p>
      <audio controls preload="metadata" src={crushingAtmosphere} autoPlay loop>
        Seu navegador não suporta reprodução de áudio.
      </audio>
    </section>
  )
}

export default SpotifyPlayer
