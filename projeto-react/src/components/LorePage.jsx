import { useState } from 'react'
import AdminComposer from './AdminComposer'
import AdminLogin from './AdminLogin'
import lorePosts from '../content/lorePosts'

function LorePost({ post, onOpen }) {
  const isStory = post.type === 'História'

  return (
    <article
      className={`post-card ${post.type.toLowerCase()}`}
      onClick={() => isStory && onOpen(post)}
    >
      <div
        className="post-image"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <span className="post-type">{post.type}</span>
        {post.type === 'Teaser' && <span className="play-icon">▶</span>}
      </div>
      <div className="post-copy">
        <p className="eyebrow">{post.date}</p>
        <h2>{post.topic}</h2>
        <p>{post.excerpt}</p>
        <div className="post-meta">
          <span>por {post.author}</span>
          {isStory && <span>ler história ↗</span>}
        </div>
      </div>
    </article>
  )
}

function LoreDetail({ post, onBack }) {
  return (
    <main className="lore-page detail-page">
      <button className="back-button" onClick={onBack}>
        ← voltar ao arquivo
      </button>
      <article className="detail-article">
        <div
          className="detail-image"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <span>{post.type}</span>
        </div>
        <div className="detail-content">
          <p className="eyebrow">{post.type} / {post.date}</p>
          <h1>{post.topic}</h1>
          <p className="byline">
            Publicado por <strong>{post.author}</strong>
          </p>
          <p className="detail-body">{post.body}</p>
          <p className="detail-body">
            O arquivo continua aberto. Há mais fragmentos além deste,
            esperando pelo leitor certo para ganhar forma.
          </p>
        </div>
      </article>
    </main>
  )
}

function LorePage({ onBack }) {
  const [selectedPost, setSelectedPost] = useState(null)
  const [posts, setPosts] = useState(lorePosts)
  const [composerOpen, setComposerOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [adminUnlocked, setAdminUnlocked] = useState(false)

  if (selectedPost) {
    return <LoreDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
  }

  const createPost = (post) => {
    setPosts((current) => [{ ...post, id: Date.now() }, ...current])
    setComposerOpen(false)
  }

  const unlockAdmin = () => {
    setAdminUnlocked(true)
    setLoginOpen(false)
    setComposerOpen(true)
  }

  return (
    <main className="lore-page">
      <div className="page-intro">
        <div>
          <p className="eyebrow">Suplas / Arquivo 001</p>
          <h1>LORE</h1>
        </div>
        <p>
          Histórias e rumores de
          <br />
          Rosemary, Dakota do Norte.
        </p>
        <button
          className="admin-button"
          onClick={() => adminUnlocked ? setComposerOpen((open) => !open) : setLoginOpen(true)}
        >
          + nova entrada
          <span>{adminUnlocked ? 'editor aberto' : 'somente admin'}</span>
        </button>
      </div>
      {loginOpen && <AdminLogin onUnlock={unlockAdmin} onClose={() => setLoginOpen(false)} />}
      {composerOpen && <AdminComposer onCreate={createPost} onClose={() => setComposerOpen(false)} />}
      <div className="filter-row">
        <span>Todas <b>{posts.length}</b></span>
        <span>Histórias <b>{posts.filter((post) => post.type === 'História').length}</b></span>
        <span>Teasers <b>{posts.filter((post) => post.type === 'Teaser').length}</b></span>
      </div>
      <div className="post-grid">
        {posts.map((post) => (
          <LorePost key={post.id} post={post} onOpen={setSelectedPost} />
        ))}
      </div>
      <button className="back-button lower-back" onClick={onBack}>
        ← voltar ao início
      </button>
    </main>
  )
}

export default LorePage
