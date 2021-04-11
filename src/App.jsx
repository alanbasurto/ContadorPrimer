import { useState } from "react"

const App = () => {
    const [counter,setCounter]=useState(0)
    const [salto,setSalto]=useState(1)
    return (
        <main className="contenedor">
            <h1>Contador para contar</h1>
            <div className="count1">
                <h2>Contador</h2>
                <h3>{counter}</h3>
                <div className="botones">
                <button onClick={()=>setCounter(counter+salto)}>Sumar</button>
                <button onClick={()=>setCounter(counter-salto)}>Restar</button>
                <button onClick={()=>setCounter(0)}>Reset</button>
                </div>
            </div>
            <div className="count2">
                <h2>Salto</h2>
                <h3>{salto}</h3>
                <div className="botones">
                <button onClick={()=>setSalto(salto+1)}>Sumar</button>
                <button onClick={()=>setSalto(salto-1)}>Restar</button>
                <button onClick={()=>setSalto(1)}>Reset</button>
                </div>
            </div>
        </main>
    ) 
}

export default App