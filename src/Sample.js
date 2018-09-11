import React, { Component } from 'react';
import { react2angular } from 'react2angular';

class Sample extends Component {
  render() {
    return (
      <div className="ReactSample">
        Sample React Component {this.props.foo}
      </div>
    );
  }
}

export default Sample;
export const AngularSample = react2angular(Sample, ['foo']);

window.AngularSample =  AngularSample;
