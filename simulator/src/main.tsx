import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'
import { StrictMode, Suspense } from 'react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <div className='relative w-screen h-screen bg-slate-300'>
        <App />
      </div>
    </Suspense>
  </StrictMode>
)