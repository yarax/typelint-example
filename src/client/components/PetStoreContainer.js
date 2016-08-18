import React from 'react';
import { connect } from 'react-redux'
import superagent from 'superagent';

class PetStoreContainer extends React.Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.loadPets();
    }
  }

  render() {
    const err = this.props.error;
    console.log(this.props.pets);
    return (
      <div>
        {err ? <b>{err}</b> : null}
        {this.props.pets.map((pet, index) => (
          <div key={index}>
            {pet.name}
            <input size="2" value={this.props.counters[index] || 0}/>
            <button onClick={this.props.onCounterClick(index, 1)}>+</button>
            <button onClick={this.props.onCounterClick(index, -1)}>-</button>
          </div>
        ))}
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    onCounterClick: (index, diff) => {
      console.log('CLICK');
      dispatch({
        type: 'COUNT',
        diff,
        index
      })
    },
    onCommentsChange: (text) => {
      dispatch({
        type: 'COMMENT',
        text
      });
    },
    loadPets: () => {
      superagent.get('http://petstore.swagger.io/v2/pet/findByStatus?status=available')
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
    return {
      error: state.loading.error,
      pets: state.entities.pets,
      counters: state.form.cart.counters,
      loaded: state.loading.loaded
    }
  },
  mapDispatchToProps
)(PetStoreContainer)
