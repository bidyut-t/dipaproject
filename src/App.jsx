import { useState } from 'react'
import Login from './pages/login/login';
import Deshboard from './pages/deskboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Deshboard/>
    </>
  )
}

export default App
