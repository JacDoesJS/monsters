import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rnw from 'vite-plugin-react-native-web';

export default defineConfig({
  plugins: [
    react(),
    rnw()
  ],
  optimizeDeps: {
    exclude: ['react-native/index.js.flow'],
  },
  resolve: {
    alias: {
      // Alias react-native imports to react-native-web
      'react-native': 'react-native-web',
    },
  },
});
