import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayOuts from "../Layouts/MainLayOuts";
import Login from "../Components/Login";
import Register from "../Components/Register";
import UpcomingEvents from "../pages/UpcomingEvents";
import CreateEvent from "../Components/CreateEvent";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import JoinedEvent from "../pages/JoinedEvent";
import ManageEvents from "../pages/ManageEvents";
import EventDetail from "../pages/EventDetail";
import UpdateEvent from "../pages/UpdateEvent";
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
        path: "/create-event",
        element: (
          <PrivateRoute>
            <CreateEvent></CreateEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-joined-events",
        element: (
          <PrivateRoute>
            <JoinedEvent></JoinedEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-event",
        element: (
          <PrivateRoute>
            <ManageEvents></ManageEvents>
          </PrivateRoute>
        ),
      },
      {
        path: "/event-detail/:id",
        Component: EventDetail,
      },
      {
        path: "/update-event",
        element: (
          <PrivateRoute>
            <UpdateEvent></UpdateEvent>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
