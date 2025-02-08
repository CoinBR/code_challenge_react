import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {bootMockApi}  from './mockApi'

async function startApp() {

  if (process.env.NODE_ENV === 'development') {
    await bootMockApi()
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

startApp()

