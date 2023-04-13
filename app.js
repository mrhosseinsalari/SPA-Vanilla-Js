// 1. what view show to user based on Route ?

function router() {
  // dashboard, products, posts :
  const routes = [
    { path: "/", view: () => console.log("dashboard page") },
    { path: "/posts", view: () => console.log("posts page") },
    { path: "/products", view: () => console.log("products page") },
  ];

  const potentialRoutes = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  });

  let match = potentialRoutes.find((route) => route.isMatch);

  if (!match) {
    match = {
      route: { path: "/not-found", view: () => console.log("Not found page") },
      isMatch: true,
    };
  }

  match.route.view();
}

document.addEventListener("DOMContentLoaded", () => {
  router();
});
