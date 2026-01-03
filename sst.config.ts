/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "monorepo",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: { aws: "7.15.0" },
    };
  },
  async run() {
    new sst.aws.SvelteKit("PersonalSite", {
      path: "apps/site",
    });
  },
});
