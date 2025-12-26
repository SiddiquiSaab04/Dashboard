import { createBrowserRouter } from "react-router-dom";
import Overview from "../pages/Overview";
import Layout from "../components/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
    ],
  },
]);

export default router;
