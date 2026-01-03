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
    new sst.aws.SvelteKit("PersonalSite", {
      path: "apps/site",
    });
  },
});
