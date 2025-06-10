import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // already correct for Vercel
  server: {
    host: true,
    port: 5000,
    // For SPA fallback, no need to add historyApiFallback; Vite handles it automatically for React projects.
  },
})
