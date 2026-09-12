function AdminComposer({ onCreate, onClose }) {
  const submit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)

    onCreate({
      type: form.get('type'),
      topic: form.get('topic'),
      excerpt: form.get('excerpt'),
      author: form.get('author'),
      date: '04.07.13',
      image: form.get('image'),
      body: form.get('body'),
    })
  }

  return (
    <form className="admin-composer" onSubmit={submit}>
      <div>
        <p className="eyebrow">Editor do administrador</p>
        <button type="button" className="close-composer" onClick={onClose}>
          fechar ×
        </button>
      </div>
      <label>
        Tipo
        <select name="type" defaultValue="História">
          <option>História</option>
          <option>Teaser</option>
        </select>
      </label>
      <label>
        Título
        <input name="topic" placeholder="Título da entrada" required />
      </label>
      <label>
        Publicado por
        <input name="author" placeholder="Apelido" required />
      </label>
      <label>
        URL da imagem
        <input name="image" placeholder="https://..." optional />
      </label>
      <label>
        Descrição curta
        <textarea name="excerpt" placeholder="Sobre o que é esta entrada?" required />
      </label>
      <label>
        História completa
        <textarea name="body" placeholder="Texto da história..." />
      </label>
      <button className="primary-action" type="submit">
        publicar entrada <span>↗</span>
      </button>
    </form>
  )
}

export default AdminComposer
