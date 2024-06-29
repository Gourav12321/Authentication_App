import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // Adjust the limit to your preference, e.g., 2000 KB
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,     // If you're not using HTTPS in development
      },
    },
  },
});
