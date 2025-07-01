import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  publicDir: "public", // ✅ Явно укажи папку public
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


