import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers.js';

const loggerMiddleware = createLogger()

export default function configStore(){
    return createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
}

// export default function configStore(preloadedState = {}){
//     return createStore(rootReducer, preloadedState);
// }