import { useState } from 'react'

function AdminLogin({ onUnlock, onClose }) {
  const [password, setPassword] = useState('')
  const [failed, setFailed] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    if (password === 'ROSEMARY123') {
      onUnlock()
      return
    }
    setFailed(true)
  }

  return (
    <form className="admin-login" onSubmit={submit}>
      <div>
        <p className="eyebrow">Área do administrador</p>
        <button type="button" className="close-composer" onClick={onClose}>
          fechar ×
        </button>
      </div>
      <label>
        Senha
        <input
          autoFocus
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
            setFailed(false)
          }}
        />
      </label>
      {failed && <p className="login-error">Senha incorreta.</p>}
      <button className="primary-action" type="submit">
        abrir editor <span>↗</span>
      </button>
    </form>
  )
}

export default AdminLogin
