import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayOuts from "../Layouts/MainLayOuts";
import Login from "../Components/Login";
import Register from "../Components/Register";
import UpcomingEvents from "../pages/UpcomingEvents";
import Gallery from "../pages/Gallery";
import CreateEvent from "../Components/CreateEvent";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
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
      {
        path: "/events",
        Component: UpcomingEvents,
        loader: () => fetch("http://localhost:3000/events"),
      },
      {
        path: "/gallery",
        Component: Gallery,
      },
      {
        path: "/create-event",
        element: (
          <PrivateRoute>
            <CreateEvent></CreateEvent>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
