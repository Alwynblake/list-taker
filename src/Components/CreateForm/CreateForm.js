import React from 'react';
import './CreateForm.scss';

const CreateForm = ({handleTopic, handleNote, handleSubmit}) => (
    <ul>
      <form onSubmit={handleSubmit}>

        <textarea
          name='topic'
          placeholder='type the topic here'
          cols='20'
          rows='1'
          onChange={handleTopic}
        />
        <textarea
          name='note'
          placeholder='type note content here'
          cols='54'
          rows='1'
          onChange={handleNote}
          />
          <button type='submit'>Add to List</button>
      </form>
    </ul>
);

export default CreateForm;