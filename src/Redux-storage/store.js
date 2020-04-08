import { createStore , applyMiddleware,compose} from 'redux'
import reducer from './Reducer'
import thunk from 'redux-thunk'

const Compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, Compose(applyMiddleware(thunk)))

export default store