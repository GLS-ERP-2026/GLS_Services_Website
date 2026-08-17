import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Careers } from './Careers';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Careers />
  </StrictMode>
);
