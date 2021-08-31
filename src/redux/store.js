import { createStore } from 'redux';
import noteReducer from './reducers';

export default createStore(
    noteReducer
    );