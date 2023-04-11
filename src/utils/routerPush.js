export default function routerPush(router) {
  router.push(
    {
      pathname: router.pathname,
      query: router.query,
    },
    undefined,
    { scroll: false }
  );
}
