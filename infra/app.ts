import { router } from "./shared";
import { subdomain } from "./stage";

export const api = new sst.aws.Function("Api", {
  handler: "apps/api/main.go",
  runtime: "go",
  url: {
    router: {
      instance: router,
      domain: subdomain("api")
    }
  },
})
