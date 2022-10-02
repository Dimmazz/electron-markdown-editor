import './shim'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './app'

import './index.scss'

const contaier = document.getElementById('root') as Element;

ReactDOM.createRoot(contaier).render(
  <App />
)
