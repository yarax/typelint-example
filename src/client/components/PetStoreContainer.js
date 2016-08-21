import React from 'react';
import {connect} from 'react-redux'
import superagent from 'superagent';
import PetStore from './PetStore';
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

const mapDispatchToProps = (dispatch) => {
  return {
    onCounterClick: (index, diff) => {
      return () => {
        dispatch({
          type: 'COUNT',
          diff,
          index
        })
      }
    },
    onCommentsChange: (text) => {
      dispatch({
        type: 'COMMENT',
        text
      });
    },
    loadPets: () => {
      superagent.get('/pet/findByStatus')
        .end((error, res) => {
          if (error) {
            dispatch({
              type: 'ERROR',
              error
            });
          } else {
            dispatch({
              type: 'NEW_ENTITY',
              entityName: 'pets',
              entity: res.body.slice(0, 10)
            });
            dispatch({
              type: 'LOADED'
            });
          }
        });
    }
  }
}

export default connect(
  (state) => {
    const counters =  state.form.cart.counters;
    const total = state.entities.pets.reduce((total, pet, i) => (total + (pet.price || 0) * (counters[i] || 0)), 0 );
    return {
      error: state.loading.error,
      pets: state.entities.pets,
      counters,
      total,
      loaded: state.loading.loaded
    }
  },
  mapDispatchToProps
)(PetStoreContainer)
