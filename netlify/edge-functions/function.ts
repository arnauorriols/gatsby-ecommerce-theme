export default (request) => {
  console.log(request);
  new Response("Hello world")
};

export const config = { path: "/test" };
