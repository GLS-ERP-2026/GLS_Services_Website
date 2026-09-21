import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Projects } from './Projects';
import '../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Projects />
  </StrictMode>
);
