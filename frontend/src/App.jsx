import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])


   useEffect(() => {
    
    axios.get('/api/jokes')
    .then( (response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })  
    })
  return (
    <div>
      <h1>Jokes</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map(joke => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }

      <h1>butcher sir is here with chai and full stack course</h1>
    </div>
  )
}

export default App
