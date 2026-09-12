import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import LorePage from './components/LorePage'
import MechanicsPage from './components/Mechanics/MechanicsPage'
import SiteHeader from './components/SiteHeader'

function App() {
  const [page, setPage] = useState('home')

  const content = {
    home: <HomePage onNavigate={setPage} />,
    lore: <LorePage onBack={() => setPage('home')} />,
    mechanics: <MechanicsPage onBack={() => setPage('home')} />,
  }

  return (
    <div className="app-shell">
      <SiteHeader page={page} onHome={() => setPage('home')} onNavigate={setPage} />
      {content[page]}
      
      <footer className="global-footer">
        <span>CITY OF ROSEMARY 2010?-2013</span>
        <span>ROSEMARY, NORTH DAKOTA</span>
      </footer>
    </div>
  )
}

export default App
