import ReactDOM from 'react-dom/client'
import { CookiesProvider } from 'react-cookie'

import App from './App'

import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>
)