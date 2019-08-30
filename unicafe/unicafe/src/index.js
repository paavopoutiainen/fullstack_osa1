import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <Title/>
      <button onClick={() => setGood(good +1)}>good</button>
      <button onClick={() => setNeutral(neutral +1)}>neutral</button>
      <button onClick={() => setBad(bad +1)}>bad</button>
      <Display good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}
const Title = () => {
    return <h1>Title</h1>
}

function Display({good, neutral, bad}) {
    return(
        <div> 
            <h2>Statistics</h2><br/>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
    </div>  )  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)