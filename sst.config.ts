/// <reference path="./.sst/platform/config.d.ts" />

import { site } from "./infra/app";

export default $config({
  app(input) {
    return {
      name: "monorepo",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
          profile:
            input?.stage === "production" ? "keshsad-prod" : "keshsad-dev",
        },
        cloudflare: "6.1.2",
      },
    };
  },
  async run() {
    await import("./infra/app");

    return {
      WebSite: site.url
    }
  },
});
