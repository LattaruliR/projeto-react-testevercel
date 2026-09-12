import { useState } from "react"


const Counter = () => {

    const [count, setCount] = useState(0)

    
    const handleClick = () => {
        setCount(count + 1)
    }


    return(<div>
        <h2>Contador: </h2>
        <p>{count}</p>
        <button onClick={handleClick}>Clique</button>
    </div>)
}



export default Counter