export type HttpClientResponse<R = any, E = any> = {
  statusCode: number
  response?: R
  errors?: E
}