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
