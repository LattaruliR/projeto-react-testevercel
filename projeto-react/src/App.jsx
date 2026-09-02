import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Challenge from './components/Challenge'
import Counter from './components/Counter'
import ShowMessage from './components/ShowMessage'
import Greeting from './components/Greeting'
import RandomNumber from './components/RandomNumber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "App">
      <h2>Atividade de Front-end</h2>
      <h1>Desafio 1</h1>
      <Challenge />
      <p>A soma aparece no console</p>
      <br></br>
      <h1>Desafio 2</h1>
      <Counter />
      <br></br>
      <h1>Desafio 3</h1>
      <ShowMessage />
      <br></br>
      <h1>Desafio 4</h1>
      <Greeting name="Ricardo" />
      <Greeting name="John Silver" />
      <Greeting name="Zoro" />
      <br></br>
      <h1>Desafio 5</h1>
      <RandomNumber />
      <br></br>
    </div>
  )
}

export default App
