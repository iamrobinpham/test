import React, { Component } from 'react';

class TabItemContent extends Component {
  render() {
    return (
      <div className="note-content">
        <div></div>
        <textarea>
          {this.props.note}
        </textarea>
      </div>
    )
  }
}

export default TabItemContent
