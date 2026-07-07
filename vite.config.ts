import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["framer-motion", "gsap", "@gsap/react", "lenis"],
          forms: ["react-hook-form", "zod"],
          media: ["embla-carousel-react"],
          seo: ["react-helmet-async"],
        },
      },
    },
  },
});
