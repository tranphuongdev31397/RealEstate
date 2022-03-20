import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import bannerReducer from 'components/Banner/modules/reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
    //initial reducer here
    bannerReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


const store = createStore(persistedReducer, composedEnhancer)
let persistor = persistStore(store)

export {persistor, store}