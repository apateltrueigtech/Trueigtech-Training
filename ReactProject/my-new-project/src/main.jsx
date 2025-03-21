import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import { store } from './components/Redux/Store.jsx'
import createSagaMiddleware from 'redux-saga';

createRoot(document.getElementById('root')).
render(
  <StrictMode>
    <Provider store= {store}>
    <App />
    </Provider>
   
  </StrictMode>,
)
