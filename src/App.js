import React from 'react'

function Food({favorite}) {
  return <h3>I love {favorite}</h3>
}

function Food2(props) {
  return <h3>I love {props.favorite}</h3>
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Food favorite="kimchi" />
      <Food favorite="kimbob" />
      <Food favorite="gogi" />
      <Food favorite="hamburger" />
      <Food2 favorite="hamburger2" />
    </div>
  )
}

export default App
