import { createRoot } from 'react-dom/client'
import CounterApp from './CounterApp'
import './index.css'

const divRoot = document.querySelector('#root')
const root = createRoot(divRoot) // createRoot(container!) if you use TypeScript

root.render(<CounterApp value={10} />)
