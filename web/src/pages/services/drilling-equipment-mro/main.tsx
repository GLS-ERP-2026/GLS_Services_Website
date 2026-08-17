import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DrillingEquipmentMro } from './DrillingEquipmentMro';
import '../../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DrillingEquipmentMro />
  </StrictMode>
);
