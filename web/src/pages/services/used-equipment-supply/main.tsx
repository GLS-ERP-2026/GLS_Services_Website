import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UsedEquipmentSupply } from './UsedEquipmentSupply';
import '../../../styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UsedEquipmentSupply />
  </StrictMode>
);
