import { useState } from 'react'

function ValueCounter({ index, initialLabel, onRemove }) {
  const [label, setLabel] = useState(initialLabel)
  const [currentValue, setCurrentValue] = useState(5)
  const [maxValue, setMaxValue] = useState(8)

  const updateMaxValue = (nextValue) => {
    const nextMax = Math.max(1, Number(nextValue) || 1)
    setMaxValue(nextMax)
    setCurrentValue((current) => Math.min(current, nextMax))
  }

  return (
    <section className="module tracker">
      <div className="module-heading">
        <span className="module-index">{index}</span>
        <div>
          <p className="eyebrow">Contador personalizável</p>
          <input
            className="counter-label"
            aria-label="Nome do contador"
            value={label}
            onChange={(event) => setLabel(event.target.value)}
          />
        </div>
        <button
          className="remove-counter"
          onClick={onRemove}
          aria-label={`Remover contador ${label}`}
        >
          ×
        </button>
      </div>
      <div className="tracker-value">
        <strong>{currentValue}/{maxValue}</strong>
        <span>atual / máximo</span>
      </div>
      <input
        className="current-slider"
        aria-label={`Valor atual de ${label}`}
        type="range"
        min="0"
        max={maxValue}
        value={currentValue}
        onChange={(event) => setCurrentValue(Number(event.target.value))}
      />
      <label className="max-value-label">
        Valor máximo
        <input
          className="counter-number"
          aria-label={`Valor máximo de ${label}`}
          type="number"
          min="1"
          value={maxValue}
          onChange={(event) => updateMaxValue(event.target.value)}
        />
      </label>
      <div className="tracker-controls">
        <span>deslize para alterar o valor atual</span>
      </div>
    </section>
  )
}

export default ValueCounter
