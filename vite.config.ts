
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    // Ensures assets are loaded relatively (e.g., ./assets/...) so the app works in subdirectories
    base: '/Personal-Website/',
    define: {
      // Safely expose the API_KEY. 
      'process.env.API_KEY': JSON.stringify(env.API_KEY || ''),
    }
  }
})
