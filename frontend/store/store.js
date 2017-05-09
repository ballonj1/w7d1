import rootReducer from '../reducers/root_reducer.js';
import { createStore } from 'redux';

const configureStore = createStore(rootReducer);

export default configureStore;
