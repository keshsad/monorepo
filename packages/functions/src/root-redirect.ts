import { type Handler } from "aws-lambda"

export const handler: Handler = async (event) => {
  console.log(event)

  return {
    statusCode: 301,
    headers: {
      "Location": "https://x.com/keshsad"
    },
    body: ""
  }
}
