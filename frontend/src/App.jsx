import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import RecentShipments from "./pages/RecentShipments";
import TrackingShipments from "./pages/TrackingShipments";
import Settings from "./pages/Settings";
import SecuritySettings from "./pages/SecuritySettings";
import SettingProfile from "./pages/SettingProfile";
import Billing from "./pages/Billing";
import NewShipMents from "./pages/NewShipMents";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index : true,
        element : <Navigate to="recentshipments" replace/>
      },
      {
        path: "recentshipments",
        element: <RecentShipments />,
      },
      {
        path: "tracking",
        element: <TrackingShipments />,
      },
      {
          path : "newshipment",
          element : <NewShipMents />
      },
      {
        path: "settings",
        element: <Settings />,
        children: [
          {
            index : true,
            element : <Navigate to="profilesettings" replace />
          },
          {
            path: "profilesettings",  
            element: <SettingProfile />,
          },
          {
            path: "securitysettings",  
            element: <SecuritySettings />,
          },
          {
            path : 'billing',
            element : <Billing />
          }
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
