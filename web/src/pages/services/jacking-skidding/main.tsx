import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { JackingSkidding } from './JackingSkidding';
import '../../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JackingSkidding />
  </StrictMode>
);
