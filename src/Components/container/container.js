import React from 'react';
import CreateForm from "../CreateForm/CreateForm";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      note: [],
      list: '',
    };
  };

addNote = (topic, note) => {
    this.setState( previous => ({
      list: [...previous.list,{topic, note}],
    }));
  };

handleTopic = (event) => this.setState({topic: event.target.value});
handleNote = (event) => this.setState({note: event.target.value});

handleSubmit = async (event) => {
  event.preventDefault();
  await this.addNote(this.state.topic,this.state.note);
};

   render() {
    return (
      <div>
        <CreateForm
          handleTopic={this.handleTopic}
          handleNote={this.handleNote}
          handleSubmit={this.handleSubmit}
          />
      </div>

    );
  }
}
export default Container;