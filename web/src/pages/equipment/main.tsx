import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Equipment } from './Equipment';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Equipment />
  </StrictMode>
);
