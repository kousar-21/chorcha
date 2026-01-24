import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutPage from "../Component/About";
import Contact from "../Component/Contact";
import Services from "../Component/Services";
import Testimonials from "../Pages/Testimonials";
import Pricing from "../Pages/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/testimonials",
        element: <Testimonials></Testimonials>
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>
      }
    ]
  },
]);