import React, { Component } from 'react';

class Pins extends Component {
  render() {
    const { pin } = this.props;
    return (
  <div className="card pin-card">
    <img src={ pin.imageUrl } className="card-img-top" alt={ pin.name } />
    <div className="card-body">
      <h5 className="card-title">{ pin.name }</h5>
      <p className="card-text">{ pin.description }</p>
    </div>
  </div>
    );
  }
}

export default Pins;
