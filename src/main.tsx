import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/main.scss';
import { Theme } from "@radix-ui/themes";
import App from './App'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Theme>
        <App />
      </Theme>
    </StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
