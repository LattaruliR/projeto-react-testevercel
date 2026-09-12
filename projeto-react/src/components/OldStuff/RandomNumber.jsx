import { useState } from "react"

const RandomNumber = () => {
    const [count, setCount] = useState(1)

    const GenerateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1
        setCount(randomNumber)
    }




    return(
        <div>
            <button onClick={GenerateRandomNumber}>Gerar número</button>
            <h2>Número gerado:</h2>
            <p>{count}</p>
        </div>
    )
}


export default RandomNumber