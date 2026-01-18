import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    // Ensures assets are loaded relatively (e.g., ./assets/...) so the app works in subdirectories
    base: './',
    define: {
      // Safely expose the API_KEY. 
      // If undefined, it becomes an empty string preventing "process is not defined" errors.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || ''),
      // Prevent crash if a library tries to access process.env directly
      'process.env': {} 
    }
  }
})