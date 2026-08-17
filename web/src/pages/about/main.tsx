import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { About } from './About';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <About />
  </StrictMode>
);
