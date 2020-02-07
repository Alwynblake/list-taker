import React from 'react';

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

handleSubmit = async (event) => {
  event.preventDefault();
  await this.addNote(this.state.topic,this.state.note);
};

   render() {
    return (
      <section>

          handleSubmit={this.handleSubmit}

      </section>

    );
  }
}
export default Container;