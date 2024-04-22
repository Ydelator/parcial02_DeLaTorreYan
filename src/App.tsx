import './App.css'
import Header from './app/components/container/Header'
import Routing from './app/utilities/routes/Routing'

import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Header></Header>
          <Routing></Routing>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
