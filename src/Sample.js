import React, { Component } from 'react';

class Sample extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="ReactSample">
        Sample React Component
      </div>
    );
  }
}

export default Sample;
