import Dashboard from "./pages/Dashboard.js";
import Posts from "./pages/Posts.js";
import Products from "./pages/Products.js";
import NotFound from "./pages/NotFound.js";

// 1. what view show to user based on Route ?

function router() {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Posts },
    { path: "/products", view: Products },
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
      route: { path: "/not-found", view: NotFound },
      isMatch: true,
    };
  }

  document.querySelector("#app").innerHTML = match.route.view();
}

// 2. push user to new url :

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
