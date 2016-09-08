import React from 'react';
import { connect } from 'react-redux';
import PetStore from './PetStore';
import mapDispatchToProps from '../redux/actions';
class PetStoreContainer extends React.Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.loadPets();
    }
  }
  render() {
    return (<PetStore {...this.props}/>);
  }
}

export default connect(
  /**
   *
   * @param {ReduxState} state
   * @returns {Object}
   */
  (state) => {
    const counters = state.form.cart.counters;
    const total = state.entities.pets.reduce((sum, pet, i) => (sum + ((pet.price || 0) * (counters[i] || 0))), 0);
    return {
      error: state.loading.error,
      pets: state.entities.pets,
      counters,
      total,
      loaded: state.loading.loaded
    };
  },
  mapDispatchToProps
)(PetStoreContainer);
