import { useState } from "react"



function Use() {

    const [cor, setColor] = useState('')
    const [contar, setcontar] = useState(0)
    const [mostrar, setMostrar] = useState(true)
    const [nome, setNome] = useState('')

    //atividades

    const [texto, setTexto] = useState('Olá')

    function MudarTexto() {
        setTexto(texto === 'Olá!' ? 'Tchau' : 'Olá!')
    }

    const [color, setColorr] = useState('')

    const [aceito, setAceito] = useState(false)

const [cont, setCont] = useState(0)

const [show, setShow] = useState(false)

const [modo, setModo] = useState(false)

    return (
        <section>

<h1>Mudar de tema</h1>

<p>{modo ? 'modo claro': 'modo escuro' }</p>

<button onClick={() => setModo(!modo)} style={{backgroundColor: modo? '#fff': '#000'}} >Mudar tema</button>

            <h1>Aqui vamos estudar o useStates</h1>

            <p>color:{cor}</p>

            <button onClick={() => { setColor("Pink") }} >Pink</button>
            <button onClick={() => { setColor("Blue") }} >Blue</button>
            <button onClick={() => { setColor("Black") }} >Black</button>
            <button onClick={() => { setColor("") }} >Limpar</button>

            <h2>contador</h2>

            <p>Valor: {contar}</p>

            <button onClick={() => { setcontar(contar + 1) }}>+</button>
            <button onClick={() => { setcontar(contar - 1) }} >-</button>

            <h2>Ocular ou Mostrar</h2>

            {mostrar && <p>Esse texto aparece e desaparece</p>}

            <button onClick={() => setMostrar(!mostrar)}>
                {mostrar ? 'Ocultar' : 'Mostrar'}
            </button>

            <h1>Atualizar texto</h1>

            <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />

            <p>Seu nome é: {nome}</p>

            <h2>Mudar texto</h2>

            <p>{texto}</p>

            <button onClick={MudarTexto} >Trocar texto</button>

            <h2>Mudar fundo do bgc</h2>

            <div style={{ width: 50, height: 50, backgroundColor: color }} ></div>

            <br />

            <button onClick={() => setColorr("Blue")} >Azul</button>
            <button onClick={() => setColorr("Pink")} >Pink</button>
            <button onClick={() => setColorr('Green')} >Green</button>

            <h1>Termos de uso</h1>

            <label>
                <input type="checkbox" checked={aceito} onChange={() => { setAceito(!aceito) }} />

            </label>
            {aceito && <p>E permitido</p>}

<h1>Contador Simples</h1>

<p> esse é o valor:{cont}</p>

<button onClick={() => {setCont(cont + 1)}} >+</button>


<h1>Mostrar</h1>

<button  onClick={() => setShow(!show)} >Mostrar</button>

{show && <img style={{width:300, height:'auto'}} src="src/IMAGE/Flores.jpg"/>}









        </section>
    )
}

export default Use