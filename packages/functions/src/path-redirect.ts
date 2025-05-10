import { type Handler } from "aws-lambda"

export const handler: Handler = async (event) => {
  const path = event.rawPath
  const redirectUrl = `https://site.keshsad.com${path}`

  return {
    statusCode: 301,
    headers: {
      "Location": redirectUrl
    },
    body: ""
  }
}
