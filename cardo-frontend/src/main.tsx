import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App.tsx'
import './app/index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProgressSpinner } from 'primereact/progressspinner';

import '@/shared/config/i18n.ts'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-dark-cyan/theme.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        <Suspense fallback={<ProgressSpinner />}>
          <App />
        </Suspense>
      </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>,
)
