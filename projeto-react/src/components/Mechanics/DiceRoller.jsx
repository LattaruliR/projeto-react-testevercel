import { useState } from 'react'

const dice = [4, 6, 8, 10, 12, 20, 100]

function DiceRoller() {
  const [sides, setSides] = useState(20)
  const [result, setResult] = useState(null)

  const roll = () => setResult(Math.floor(Math.random() * sides) + 1)

  return (
    <section className="module dice-module">
      <div className="module-heading">
        <span className="module-index">01</span>
        <div>
          <p className="eyebrow">Sorteio</p>
          <h3>Rolar dados</h3>
        </div>
      </div>
      <div className="dice-face">{result ?? '—'}</div>
      <div className="dice-options">
        {dice.map((die) => (
          <button
            className={sides === die ? 'active' : ''}
            key={die}
            onClick={() => setSides(die)}
          >
            d{die}
          </button>
        ))}
      </div>
      <button className="primary-action" onClick={roll}>
        Rolar d{sides}
        <span>↗</span>
      </button>
    </section>
  )
}

export default DiceRoller
