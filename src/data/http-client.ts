import { HttpClientResponse } from "./http-client-response";

export type HttpClient = {
  request() :  Promise<HttpClientResponse>;
}