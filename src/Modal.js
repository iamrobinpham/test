import React, { Component } from 'react';
import './Modal.css'

import TabItemContent from './TabItemContent.js'
import TabSidebar from './TabSidebar.js'

class Modal extends Component {
  constructor(props) {
    super(props)
    const currentNote = window.localStorage.getItem('currentNote')
    const notes = window.localStorage.getItem('notes') ? 
      JSON.parse(window.localStorage.getItem('notes')) :
      {}
    this.state = {
      currentNote,
      notes
    }
  }

  selectNote = (noteId) => {
    this.setState({ currentNote: noteId })
    window.localStorage.setItem('currentNote', noteId)
  }

  addNote = () => {
    const size = Object.keys(this.state.notes).length
    const newNotes = Object.assign({}, this.state.notes, {[size]: 'Write something here'})
    window.localStorage.setItem('notes', JSON.stringify(newNotes))
    this.setState({
      notes: newNotes 
    })
  }

  deleteNote = (noteId) => {
    const newNotes = Object.assign({}, this.state.notes)
    delete newNotes[noteId] 
    window.localStorage.setItem('notes', JSON.stringify(newNotes))
    this.setState({
      notes: newNotes 
    })
  }

  render() {
    const currentNote = this.state.currentNote
    return (
      <div className="modal">
        <div className="modal_body">
          <TabSidebar
            currentNote={currentNote}
            deleteNote={this.deleteNote}
            notes={this.state.notes}
            selectNote={this.selectNote}
          />
          <TabItemContent
            note={this.state.notes[currentNote]}
          />
        </div>

      <div className="modal_footer">
        <div onClick={this.addNote}>
          add new note
        </div>
        <div onClick={this.props.toggleModal}>
          this will be the footer with a close button
        </div>
      </div>
      </div>
    )
  }
}

export default Modal;
