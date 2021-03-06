import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './redux/reducer';
import PetStoreContainer from './components/PetStoreContainer';
const store = createStore(reducer, undefined, window.devToolsExtension());

class Root extends React.Component {
  render() {
    return (
      <div>
        <h1>Petstore</h1>
        <Provider store={store}>
          <PetStoreContainer />
        </Provider>
      </div>
    );
  }
}

render(<Root />, document.getElementById('container'));