import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react'
const clerk_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!clerk_key) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ClerkProvider publishableKey={clerk_key} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>
)
