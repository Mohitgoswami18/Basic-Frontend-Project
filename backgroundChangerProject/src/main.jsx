import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mycomponent from './components/Mycomponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mycomponent />
  </StrictMode>,
)
