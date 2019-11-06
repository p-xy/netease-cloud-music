import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

/*
//创建store(老版本)
const store = createStore(
    reducer, 
    compose( applyMiddleware(thunk),  window.devToolsExtension ? window.devToolsExtension() : f => f //开启redux调试
    
 
));
*/
//新版本的调式工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,  composeEnhancers(
    applyMiddleware(thunk)
    ))
    

export default store
