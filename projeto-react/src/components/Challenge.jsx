let a = 7;
let b = 5;

const Challenge = () => {


    const handleClick = () => {
        console.log(Sum(a, b));
    };

    return (
        <div>
            <h2>Primeiro valor: {a}</h2>
            <h2>Segundo valor: {b}</h2>

            <button onClick={handleClick}>
                Somar
            </button>
        </div>
    );


};

function Sum(num1, num2) {
    return num1 + num2;
}

export default Challenge;
