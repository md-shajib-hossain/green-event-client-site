import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayOuts from "../Layouts/MainLayOuts";
import Login from "../Components/Login";
import Register from "../Components/Register";
// import Login from "../Components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOuts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        Component: Register,
      },
    ],
  },
]);

export default router;
