import { HttpMethod } from "./http-client"

export type httpClientRequest<B = any> = {
  body?: B
  method: HttpMethod
  url?: string
}