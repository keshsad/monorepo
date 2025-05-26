/// <reference path="./.sst/platform/config.d.ts" />

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
    const app = await import("./infra/app")
    const shared = await import("./infra/shared")
    const stage = await import("./infra/stage")

    return {
      domain: stage.domain,
      permananetStage: stage.isPermanentStage,
      siteUrl: app.site.url,
      rishiUrl: app.rishi.url,
      apiUrl: app.api.url,
    }
  },
});
