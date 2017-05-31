import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Modal from './Modal.js';

class App extends Component {
  constructor(props) {
    super(props)
    const notes = JSON.parse(window.localStorage.getItem('notes'))
    this.state = {
      isModalShowing: false,
      notes
    }
  }

  render() {
    const notes = this.state.notes ? this.state.notes : {}
    const numberOfNotes = Object.keys(notes).length

    return (
      <div className="App">
        <div onClick={this.toggleModal}>
          Open: {numberOfNotes}
        </div>
        {
          this.state.isModalShowing ?
            <Modal
              notes={notes}
              toggleModal={this.toggleModal}
            /> :
            null
        }
      </div>
    );
  }

  toggleModal = () => {
    this.setState({isModalShowing: !this.state.isModalShowing})
  }

}

export default App;
