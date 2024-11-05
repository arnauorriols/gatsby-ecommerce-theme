import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  console.log(request.headers);
};