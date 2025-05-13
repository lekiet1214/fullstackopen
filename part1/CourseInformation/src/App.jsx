const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = (parts) => {
  return (
    <div>
      <Part part={parts.parts[0].name} exercises={parts.parts[0].exercises} />
      <Part part={parts.parts[1].name} exercises={parts.parts[1].exercises} />
      <Part part={parts.parts[2].name} exercises={parts.parts[2].exercises} />
    </div>
  )
}

const Total = (exercises) => {
  return (
    <p>
      Number of exercises {exercises.parts[0].exercises + exercises.parts[1].exercises + exercises.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <div>
       <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
