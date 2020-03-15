// Allow CloudWatch to read source maps
import 'source-map-support/register'

// Enable AWS X-Ray
import { captureHTTPsGlobal } from 'aws-xray-sdk'
import https from 'https'
captureHTTPsGlobal(https, true)

interface IEvent {
  a: number
  b: number
}

// You can import event types from @types/aws-lambda
// import { APIGatewayProxyEvent } from 'aws-lambda'
import { sum } from './lib/main'

export async function handler(event: IEvent): Promise<number> {
  return await sum(event)
}
