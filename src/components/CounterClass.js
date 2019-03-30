import React, { PureComponent } from 'react'

class CounterClass extends Component {
  state = {
    counter: 0,
  }
  inc = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  dec = () => {
    this.setState({
      counter: this.state.counter - 1,
    })
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      })
    }, 1000)
  }

  shouldComponentUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default CounterClass
