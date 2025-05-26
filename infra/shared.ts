import { isPermanentStage, domain } from "./stage"

export const router = isPermanentStage
  ? new sst.aws.Router("Router", {
    domain: {
      name: domain,
      dns: sst.cloudflare.dns(),
      aliases: [`*.${domain}`],
    },
  })
  : sst.aws.Router.get("Router", "E4HMK5H2F9VKZ")

export const bucket = isPermanentStage
  ? new sst.aws.Bucket("Bucket", {
    access: "cloudfront",
  })
  : sst.aws.Bucket.get("Bucket", "monorepo-dev-bucketbucket-rkxweftn")
