import { httpClientRequest } from "./http-client-request";
import { HttpClientResponse } from "./http-client-response";

export type HttpClient<ResponseType = any, ErrorType = any> = {
  request(data : httpClientRequest) :  Promise<HttpClientResponse<ResponseType, ErrorType>>;
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}