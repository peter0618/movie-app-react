import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('constructor()');
  }

  // state 는 dynamic data 를 담는 Object 입니다.
  // state 를 setState 함수를 이용해 변경하면 render() 함수를 호출합니다.
  state = {
    count: 0,
  };
  add = () => {
    console.log('add');
    this.setState((prevState) => {
      return { count: prevState.count + 1};
    })
  };
  minus = () => {
    console.log('minus');
    this.setState((prevState) => {
      return { count: prevState.count - 1};
    })
  }
  render() {
    console.log(`render()`);
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
  componentDidMount() {
    console.log(`componentDidMount()`);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`componentDidUpdate()`);
  }
}

export default App
