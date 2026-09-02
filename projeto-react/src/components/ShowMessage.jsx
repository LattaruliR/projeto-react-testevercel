import { useState } from "react"

const ShowMessage = () => {
    const [count, setText] = useState(false)

    const handleClick = () => {
        setText(!count)
        // Se for verdade: mostra a mensagem, se não, nao mostra, alterna com o clique
    }


    return(
        <div>
            <button onClick={handleClick}>Mostrar Mensagem</button>
            {count && <h2>Está e a mensagem!</h2>}
        </div>
    )

}



export default ShowMessage