import './App.css'

//Pages
import Props from './pages/props'
import Use from './pages/useStates'

function App() {

  function clique() {

  }


  return (
    <section>

      <h2>Estudos React</h2>

      <Props idProps='Props' name='Matheus' react='React' comida='Pizza' preco="20" corId='#e95dd1' corId2='blue' />
      <Use />


    </section>

  )
}

export default App
