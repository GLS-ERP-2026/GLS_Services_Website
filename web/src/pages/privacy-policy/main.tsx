import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PrivacyPolicy } from './PrivacyPolicy';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrivacyPolicy />
  </StrictMode>
);
