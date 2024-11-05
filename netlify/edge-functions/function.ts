export default (request, ctx) => {
  console.log(request);
  console.log(ctx);
  new Response("Hello world")
};

export const config = { path: "/test" };
