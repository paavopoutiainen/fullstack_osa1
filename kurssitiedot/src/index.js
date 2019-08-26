import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return(
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    {console.log(props)}
    {console.log(props.parts[0])}
    return(
        <div>
            <Part part = {props.parts[0]['name']} exercises = {props.parts[0]['exercises']}/>
            <Part part = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
            <Part part = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
        </div>
    )
}

const Part = (props) => {
    return(
        <p>{props.part} {props.exercises}</p>
    )
}

const Total = (props) => {
    const reducer = (accum, current) => accum + current;
 
    const exerciseNumbers = props.parts.map(a => a.exercises);
    console.log(exerciseNumbers);

    return(
        <div>
            <p>Number of exercises {exerciseNumbers.reduce((a,b) => a + b)}</p>
        </div>
    )
}



const App = () => {
    const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))