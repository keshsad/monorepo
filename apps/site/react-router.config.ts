import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  // return list of URLs to prerender at build tim
  async prerender() {
    return ["/", "/about", "/work", "/contact"];
  }
} satisfies Config;
