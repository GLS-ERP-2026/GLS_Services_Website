import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Cranes } from './Cranes';
import '../../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cranes />
  </StrictMode>
);
