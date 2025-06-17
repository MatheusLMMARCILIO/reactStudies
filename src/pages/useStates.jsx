import { useState } from "react"



function Use() {

    const [cor, setColor] = useState('')

    return (
        <section>

            <h1>Aqui vamos estudar o useStates</h1>

            <p>color:{cor}</p>

            <button onClick={() => { setColor("Pink") }} >Pink</button>
            <button onClick={() => { setColor("Blue") }} >Blue</button>
            <button onClick={() => { setColor("Black") }} >Black</button>
            <button onClick={() => { setColor("") }} >Limpar</button>

            <br />
            <br />



        </section>
    )
}

export default Use