import React from 'react'
import { render } from 'react-dom'
import './index.scss'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './store'
const store = createStore(rootReducer)

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
