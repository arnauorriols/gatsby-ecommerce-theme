export default (request, ctx) => {
  console.log(request);
  console.log(ctx);
  const res = fetch("https://httpbin.org/headers");
  return res;
};

export const config = { path: "/test" };
