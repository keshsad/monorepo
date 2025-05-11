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

export const site = new sst.aws.React("WebSite", {
  path: "apps/site",
  router: {
    instance: router,
    domain: subdomain("site")
  },
  environment: {
    API_URL: api.url
  },
  dev: {
    url: "http://localhost:5173/",
  }
})

export const rootRedirect = new sst.aws.Function("RootRedirect", {
  handler: "packages/functions/src/root-redirect.handler",
  url: true
})

export const pathRedirect = new sst.aws.Function("PathRedirect", {
  handler: "packages/functions/src/path-redirect.handler",
  url: true
})

router.route("/", rootRedirect.url)
router.route("/*", rootRedirect.url)

