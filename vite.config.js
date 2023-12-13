import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    base:"/lab-react-jsx-boilerplate/",
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});