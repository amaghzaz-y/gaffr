import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { StrictMode, Suspense } from 'react'
import ActionToolbar from './components/action-toolbar'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <div className='relative w-screen h-screen bg-slate-300'>
        <div className='absolute'>
          <ActionToolbar />
        </div>
        <App />
      </div>
    </Suspense>
  </StrictMode>
)