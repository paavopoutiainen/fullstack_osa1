import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { numericLiteral, tsPropertySignature } from '@babel/types';

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  

  return (
    <div>
      <Title/>
      <Button callback={() => setGood(good + 1)} text = "good"/>
      <Button callback={() => setNeutral(neutral +1)} text = "neutral"/>
      <Button callback={() => setBad(bad +1)} text = "bad"/>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}
const Button = ({callback, text}) =>{
    return <button onClick = {callback}>{text}</button>
}
const Title = () => {
    return <h1>Title</h1>
}

function Statistics({good, neutral, bad}) {
    
    let all = good + neutral + bad;
    console.log(all)

    let average = (good * 1 + bad * -1) / all;
    console.log(average)

    if(good + neutral + bad != 0){
        return(
            <div> 
                <h2>Statistics</h2>
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
            <h2>Statistics</h2>
            <p>No feedback given</p>
        </div>
    )
}

const Statistic = ({text, value, sign}) =>{
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
            <td>{sign}</td>
        </tr>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)