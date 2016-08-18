import { combineReducers} from 'redux';
import entities from './entities';
import form from './form';
import loading from './loading';

export default combineReducers({
  entities,
  form,
  loading
})