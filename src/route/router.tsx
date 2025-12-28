import { createBrowserRouter } from "react-router-dom";
import Overview from "../pages/Overview";
import Layout from "../components/layout/Layout";
import Login from "../pages/auth/Login";
import { ProtectedRoute } from "./ProtectedRoute";

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
        index: true,
        path: "/overview",
        element: <Overview />,
      },
    ],
  },
]);

export default router;
