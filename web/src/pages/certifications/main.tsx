import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Certifications } from './Certifications';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Certifications />
  </StrictMode>
);
