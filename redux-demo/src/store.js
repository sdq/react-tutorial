import { createStore } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {
    return createStore(
        reducer,
        composeWithDevTools()
    );
}