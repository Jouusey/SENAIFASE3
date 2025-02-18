import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'StoryTeller',
        short_name: 'ST',
        description: 'Desbrave uma nova história!',
        theme_color: '***#ffffff',
        icons: [
          {
            src: 'node-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'node-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});