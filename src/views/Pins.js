import React, { Component } from 'react';
import pinData from '../helpers/data/pinData';
import PinsCard from '../components/Cards/PinsCard';
import Loader from '../components/Loader';

class Pins extends Component {
  state = {
    pins: [],
    loading: true,
  }

  componentDidMount() {
    this.getPublicPins();
  }

   getPublicPins = () => {
     pinData.getAllPins().then((response) => {
       this.setState({
         pins: response,
       }, this.setLoading);
     });
   }

   setLoading = () => {
     this.timer = setInterval(() => {
       this.setState({ loading: false });
     }, 1000);
   }

   render() {
     const { pins, loading } = this.state;
     const { user } = this.props;
     const showPins = () => (
       pins.map((pin) => (pin.userId === user.uid) && <PinsCard key={pin.firebaseKey} pin={pin} />)
     );
     return (
      <>
      { loading ? (
          <Loader />
      ) : (
          <>
      <div className='d-flex flex-wrap container'>{showPins()}</div>
      </>
      )}
              </>
     );
   }
}

export default Pins;
