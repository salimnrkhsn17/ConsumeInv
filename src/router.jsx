import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Stuff from "./pages/Stuff";
import TrashStuff from "./pages/TrashStuff";
import Inbound from "./pages/Inbound";
import InboundStuff from "./pages/InboundStuff";
import User from "./pages/User";
import TrashUser from "./pages/TrashUser";
import Lending from "./pages/Lending";



export const router = createBrowserRouter([
  { path: '/', element: <App />},
  { path: '/login', element: <Login />},
  { path: '/profile', element: <Profile />},
  { path: '/dashboard', element: <Dashboard />},
  { path: '/stuff', element: <Stuff />},
  { path: '/stuff/trash', element: <TrashStuff /> },
  { path: '/inbound-stuff', element: <Inbound /> },
  { path: '/inbound-stuff/data', element: <InboundStuff/> },
  { path: '/users', element: <User /> },
  { path: '/users/trash', element: <TrashUser />},
  { path: '/lending', element: <Lending />}
  

])