import { createBrowserRouter } from "react-router-dom";
import Overview from "../pages/Overview";
import Layout from "../components/layout/Layout";
import Login from "../pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
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
