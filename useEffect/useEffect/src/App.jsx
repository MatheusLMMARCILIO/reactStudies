import './App.css'

//import

import { useEffect, useState } from 'react'

function App() {

  const [segundos, setSegundos] = useState(0)

useEffect(() => {
const timer = setInterval(() => {
  setSegundos(prev => prev + 1)
}, 1000)

return () => clearInterval(timer)

}, [])


  return (
    <section>

<h1>Temporizador</h1>

<p>Segundos passados: {segundos}</p>
    </section>
  )
}

export default App
