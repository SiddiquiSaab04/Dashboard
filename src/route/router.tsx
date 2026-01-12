import { createBrowserRouter } from "react-router-dom";
import Overview from "../pages/Overview";
import Layout from "../components/layout/Layout";
import Login from "../pages/auth/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import Products from "../pages/products/Product";
import { Settings } from "../pages/settings/Settings";
import { Report } from "../pages/reports/Report";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        path: "/",
        element: <Overview />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/report",
        element: <Report />,
      }
    ],
  },
]);

export default router;
