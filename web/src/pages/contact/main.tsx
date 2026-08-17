import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Contact } from './Contact';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Contact />
  </StrictMode>
);
