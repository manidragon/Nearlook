import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),        // enables JSX + Fast Refresh
    tailwindcss(),  // enables Tailwind
  ],
  server: {
    watch: {
      usePolling: true,
      interval: 200,   // improves detection reliability
    },
  },
});
