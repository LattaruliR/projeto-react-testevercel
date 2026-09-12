import { useState } from 'react'
import DiceRoller from './DiceRoller'
import ValueCounter from './ValueCounter'

function MechanicsPage({ onBack }) {
  const [counterCount, setCounterCount] = useState(2)
  const counters = Array.from({ length: counterCount }, (_, index) => index)

  const addCounter = () => setCounterCount((count) => count + 1)
  const removeCounter = () => setCounterCount((count) => Math.max(0, count - 1))

  return (
    <main className="mechanics-page">
      <div className="page-intro">
        <div>
          <p className="eyebrow">Kit de campo / 002</p>
          <h1>MECÂNICAS</h1>
        </div>
        <p>
          Contadores simples para
          <br />
          qualquer valor da sua ficha.
        </p>
      </div>
      <div className="mechanics-grid">
        <DiceRoller />
        {counters.map((index) => (
          <ValueCounter
            key={index}
            index={String(index + 2).padStart(2, '0')}
            initialLabel={index === 0 ? 'Valor geral' : 'Outro valor'}
            onRemove={removeCounter}
          />
        ))}
      </div>
      <button className="add-counter" onClick={addCounter}>
        + adicionar outro contador
      </button>
      <button className="back-button lower-back" onClick={onBack}>
        ← voltar ao início
      </button>
    </main>
  )
}

export default MechanicsPage
