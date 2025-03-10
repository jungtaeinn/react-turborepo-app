const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
} as const;
type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];

interface FetcherInit extends RequestInit {
  timeout?: number;
}

type FetcherInput = RequestInfo | URL;

type Fetcher = (input: FetcherInput, init?: FetcherInit) => Promise<Response>;

export { HttpMethod };
export type { Fetcher };
