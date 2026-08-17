import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        servicesCranes: resolve(__dirname, 'services/cranes.html'),
        servicesDrillingMro: resolve(__dirname, 'services/drilling-equipment-mro.html'),
        servicesJackingSkidding: resolve(__dirname, 'services/jacking-skidding.html'),
        servicesUsedEquipment: resolve(__dirname, 'services/used-equipment-supply.html'),
        careers: resolve(__dirname, 'careers.html'),
        certifications: resolve(__dirname, 'certifications.html'),
        contact: resolve(__dirname, 'contact.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
      },
    },
  },
});
