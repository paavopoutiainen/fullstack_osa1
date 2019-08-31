import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  

  return (
    <div>
      <Title text = "Give feedback"/>
      <Button callback={() => setGood(good + 1)} text = "good"/>
      <Button callback={() => setNeutral(neutral +1)} text = "neutral"/>
      <Button callback={() => setBad(bad +1)} text = "bad"/>
      <Title text = "Statistics"/>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}
const Button = ({callback, text}) =>{
    return <button onClick = {callback}>{text}</button>
}
const Title = ({text}) => {
    return <h2>{text}</h2>
}

function Statistics({good, neutral, bad}) {
    
    let all = good + neutral + bad;
    

    let average = (good * 1 + bad * -1) / all;
    

    if(good + neutral + bad !== 0){
        return(
            <div> 
                <table>
                    <tbody>
                        <Statistic text="good" value = {good}/>
                        <Statistic text="neutral" value = {neutral}/>
                        <Statistic text="bad" value = {bad}/>
                        <Statistic text="all" value = {all}/>
                        <Statistic text="average" value = {average}/>
                        <Statistic text="positive" value = {good / all * 100} sign = "%"/>
                    </tbody>
                </table>

        </div>  )  
    } return (
        <div>
            <p>No feedback given</p>
        </div>
    )
}

const Statistic = ({text, value, sign}) =>{
    return (
        <tr>
            <td>{text}</td>
            <td>{value}{sign}</td>
           
        </tr>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)