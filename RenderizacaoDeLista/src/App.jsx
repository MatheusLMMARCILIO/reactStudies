 
import './App.css'

function App() {

const nome = ['Matheus', 'Ludmilla', 'carlos']

const pessoas = [
    { id: 1, nome: 'Matheus', idade: 20 },
    { id: 2, nome: 'Ludmilla', idade: 25 },
    { id: 3, nome: 'Carlos', idade: 30 },
  ];

  const tarefas = ['Estudar', 'Lavar louça', 'Treinar'];

 

  return (
    <>
      
      <h1>Renderização de Lista</h1>

<ul>
  {tarefas.map((tarefas, i) => {
    return <li key={i} >{tarefas}</li>
  })}
</ul>

<ul>
  {nome.map((nome, i) => {
   return <li key={i} >{nome}</li>
  })}
</ul>

<ul>
  {pessoas.map((pessoas, i) => {
    return <li key={i} >{pessoas.nome} - {pessoas.idade}</li>
  } )}
</ul>

    </>
  )
}

export default App
