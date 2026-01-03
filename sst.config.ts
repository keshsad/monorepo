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
          version: "7.15.0",
          profile: input?.stage === "production" ? "keshsad-prod" : "keshsad-dev",
        },
      },
    };
  },
  async run() {
    const isPermanentStage = ["production", "dev"].includes($app.stage);

    const domain =
      $app.stage === "production"
        ? "keshsad.com"
        : $app.stage === "dev"
          ? "dev.keshsad.com"
          : `${$app.stage}.dev.keshsad.com`;

    const router = isPermanentStage
      ? new sst.aws.Router("Router", {
          domain: {
            name: domain,
            aliases: [`*.${domain}`],
            dns: sst.cloudflare.dns(),
          },
        })
      : sst.aws.Router.get("Router", "E2X0XGSO05RTZO");

    new sst.aws.SvelteKit("PersonalSite", {
      path: "apps/site",
      router: {
        instance: router,
      },
    });

    return {
      routerUrl: router.url,
      routerDistributionID: router.distributionID,
    };
  },
});
