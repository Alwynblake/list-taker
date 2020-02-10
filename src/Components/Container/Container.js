import React from 'react';
import './Container.scss';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      list: [],
    }
  };

  handleInput = (key, value) => {
    this.setState({ [key]: value })
  };

  HandleAddLine = () => {
    const note = {
      id: Math.random(), value: this.state.note.slice()
    };
    let list = [...this.state.list];
    list.push(note);
    this.setState({list, note:""})
  };

  deleteLine = (id) => {
    let list = [...this.state.list];
    const updatedList = list.filter(line => line.id !== id);
    this.setState({list: updatedList});
  };

  render() {
    return (
        <div className="Container">
          <div>

          <br/>
              <input
                type="text"
                placeholder= "Enter Text Here..."
                value={this.state.note}
                onChange={(event) =>
                    this.handleInput('note', event.target.value)}
                />
                <button onClick={(event) =>
                    this.HandleAddLine()}>
                  <span role ="img" aria-label="Add item">  Submit ✏️  </span>
                </button>

            <br/>
            <ul>
              {this.state.list.map(line => {
                return(
                    <li key={line.id}>
                      {line.value}
                      <button onClick={()=> this.deleteLine(line.id)}>
                        <span role ="img" aria-label="Add item">  Delete 🗑  </span>
                      </button>
                    </li>
                )
              })}
            </ul>
          </div>
        </div>
    );
  }
}
export default Container;
