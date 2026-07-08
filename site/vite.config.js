import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The source lives at dvelozad.github.io (a user/org GitHub Pages site),
// which serves from the domain root — so base is "/". If you deploy this
// under a project path instead (e.g. user.github.io/profile/), set
// base to "/profile/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
