import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
import App from './Components/App'
import { createRoot } from 'react-dom/client';
const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(<App/>)