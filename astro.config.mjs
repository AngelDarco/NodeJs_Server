import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "./",
  site: "https://angeldarco.github.io/server-nodejs/",
  integrations: [tailwind()]
});
