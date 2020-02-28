import { createStore } from 'redux';
import rootReducers from './rootReducer';
import {loadState} from '../Components/LocalStorage'

const Store = createStore(rootReducers, loadState())


export default Store