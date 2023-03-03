export default {
  async fetch(_request: Request, _env: any): Promise<Response> {
    return new Response('Hello world');
  },
};
