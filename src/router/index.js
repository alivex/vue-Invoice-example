import Vue from "vue";
import Router from "vue-router";

import invoiceRouter from "./modules/invoice";

Vue.use(Router);

export const mainRoutes = [
  {
    path: "/",
    redirect: "/invoices",
    hidden: true
  },
  invoiceRouter
];

const createRouter = () =>
  new Router({
    routes: mainRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
