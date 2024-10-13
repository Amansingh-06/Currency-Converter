import { useState } from 'react'
import Input from './component/Input'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Input />
    </>
  )
}

export default App
