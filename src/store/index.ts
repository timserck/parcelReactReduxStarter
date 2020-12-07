import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers'
import middlewares, { history } from './middlewares' 
const preloadedState = window.__PRELOADED_STATE__ delete window.__PRELOADED_STATE__ 
const persistConfig = { key: 'root', storage, whitelist: ['delivery'] } 
const createStoreWithMiddlewares = createStore( persistReducer(persistConfig, reducers(history)), preloadedState, middlewares ) 
export const persistor = persistStore(createStoreWithMiddlewares, { manualPersist: true })
export type RootStore = ReturnType<typeof createStoreWithMiddlewares> 
export default createStoreWithMiddlewares