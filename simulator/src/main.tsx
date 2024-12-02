import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'
import { StrictMode, Suspense } from 'react'
import Toolbar from './toolbar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <div className='relative w-screen h-screen bg-neutral-600'>
        <div className='absolute top-0 left-0 z-10'>
          <Toolbar />
        </div>
        <App />
      </div>
    </Suspense>
  </StrictMode>
)