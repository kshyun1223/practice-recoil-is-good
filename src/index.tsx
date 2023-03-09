import { createRoot } from 'react-dom/client'
import React from 'react'
import { RecoilRoot } from 'recoil'

import App from './App'

const rootNode = document.getElementById('root');

const root = createRoot(rootNode)
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RecoilRoot>
)