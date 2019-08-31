import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({anecdotes}) => {
  
    let arraySize = anecdotes.length;
  
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(arraySize+1).join('0').split('').map(parseFloat))

    function giveRandomNumber(){
        console.log(points)
        return Math.floor(Math.random() * arraySize);
    }
    function increaseVote(){
        const copyArray = [...points];
        copyArray[selected] += 1;
        setPoints(copyArray)
    }
    const getIndexOfMostVotes = () => points.indexOf(Math.max(...points));


    return (
        <div>
            <Title text = "Anecdote of the day"/>
            <Display value ={anecdotes[selected]}/>
            <Display text = "has" value = {points[selected]} text2 = "votes"/>
            <Button handleClick = {() => setSelected(giveRandomNumber())} text = "next anecdote"/>
            <Button handleClick = {() => increaseVote()} text="vote"/>
            <Title text ="Anecdote with most votes"/>
            <Display value = {anecdotes[getIndexOfMostVotes()]}/>
        </div>
    )
}

function Title({text}) {
    return <h2>{text}</h2>
}
function Display({text, value, text2}) {
    return <p>{text} {value} {text2}</p>
} 
function Button({text, handleClick}){
    return <button onClick={() => handleClick()}>{text}</button>
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)