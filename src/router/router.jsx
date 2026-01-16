import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutPage from "../Component/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: true,
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>
      }
    ]
  },
]);