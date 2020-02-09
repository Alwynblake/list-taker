import React from 'react';
import './Clock.scss';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state={time:new Date()}
  }

  currentTime()
  {
    this.setState({
      time:new Date()
    })
  }
  UNSAFE_componentWillMount()
  {
    setInterval(()=>this.currentTime(),1000)
  }
  render() {
    return (
        <div id="clock">
          {this.state.time.toLocaleTimeString()}
        </div>

    )
  }
}

export default Clock;