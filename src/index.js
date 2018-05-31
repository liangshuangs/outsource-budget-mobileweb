import React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import env from './config/env'
import { createStore, applyMiddleware, compose } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import http from './http/http'
import Root from './containers/index'
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers/index'
import setSize from './utils/setSize'

function loader() {
    setSize()
    const history = createHistory()
    const middleware = [thunk, routerMiddleware(history), http()]
    // see: http://zalmoxisus.github.io/redux-devtools-extension/
    // eslint-disable-next-line no-underscore-dangle
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        // eslint-disable-next-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

    const enhancer = composeEnhancers(applyMiddleware(...middleware))

    const store = createStore(reducers,enhancer)
    render(
        <Provider store={store}>
            <Root history={history} />
        </Provider>,
        document.getElementById('root'),
    )
    registerServiceWorker();
}
function bootstrap() {
   // window.sessionStorage.setItem('token', 'Bearer mMXImvp8ruSKcAfpZzr4dywGlXtf9Txk')
    if(env.ENV === 'development') {
        if (window.location.hash && window.location.hash.indexOf('access_token=') > -1) {
            window.sessionStorage.setItem('token', `Bearer ${window.location.hash.split('access_token=')[1].split('&')[0]}`)
        }
        loader()
    } else {
        if (window.location.hash && window.location.hash.indexOf('access_token=') > -1) {
            window.sessionStorage.setItem('token', `Bearer ${window.location.hash.split('access_token=')[1].split('&')[0]}`)
            loader()
        } else if(window.kara) {
            getToken()
        } else {
            document.addEventListener('JSSDKReady', function(){
                getToken()
            }, false);
        }
    }
}

function getToken() {
    window.kara.getToken({
        success: function(result) {
            sessionStorage.token = result.token
            loader()
        }
    })
}
export default bootstrap()


