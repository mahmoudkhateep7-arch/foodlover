import './style.css'
import { createRoot } from 'react-dom/client'
import App from './app'
const div = document.getElementById('root');
if (div) {
  createRoot(div).render(<App></App>)
}

