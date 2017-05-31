import React, { Component } from 'react';

class TabSidebar extends Component {
  render() {
    const notesList = []
    for (const note in this.props.notes) {
      notesList.push(note)
    }

    return (
      <div className="tab-sidebar">
        {
          notesList.map((note) => 
            (
              <div
                key={note}
                onClick={ () => this.props.selectNote(note)}
              >
                <p style={{display: 'inline'}}>
                  Key: {note} <strong onClick={ () => this.props.deleteNote(note)}
                  > X </strong>  
                </p>
              </div>
            )
          )
        }
      </div>
    )
  }
}

export default TabSidebar
