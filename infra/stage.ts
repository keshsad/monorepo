export const isPermanentStage = ["production", "dev"].includes($app.stage)

export const domain = (() => {
  if ($app.stage === "production") return "keshsad.com"
  if ($app.stage === "dev") return "dev.keshsad.com"
  return `${$app.stage}.dev.keshsad.com`
})()

export const subdomain = (name: string) => {
  if (isPermanentStage) return name + "." + domain
  return name + "-" + domain
}
