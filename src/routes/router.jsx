import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayOuts from "../Layouts/MainLayOuts";
import Login from "../Components/Login";
import Register from "../Components/Register";
import UpcomingEvents from "../pages/UpcomingEvents";
import Gallery from "../pages/Gallery";
import CreateEvent from "../Components/CreateEvent";
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
        Component: CreateEvent,
      },
    ],
  },
]);

export default router;
