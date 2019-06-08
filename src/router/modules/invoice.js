/** When routing table is too long, split it into small modules **/

import Layout from "@/layout";
import Invoice from "@/views/invoice";
import Information from "@/views/invoice/Information";

const invoiceRouter = {
  path: "/invoices",
  component: Layout,
  redirect: "/invoice",
  children: [
    {
      path: "/invoice",
      component: Invoice,
      name: "Invoice",
      meta: { title: "Invoice" },
      children: [
        {
          path: "information",
          name: "Information",
          component: Information,
          meta: { title: "Information" }
        },
        {
          path: "payment",
          name: "Payment",
          component: () => import("@/views/invoice/Payment"),
          meta: { title: "Payment" }
        }
      ]
    }
  ]
};

export default invoiceRouter;
