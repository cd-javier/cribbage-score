import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/cribbage-score',
  plugins: [react()],
  server: {
    host: true, // Enables access from other devices on your network
    port: 5173, // Optional: pick a custom port if needed
  },
});
