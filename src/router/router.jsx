import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutPage from "../Component/About";
import Contact from "../Component/Contact";
import Services from "../Component/Services";
import Testimonials from "../Pages/Testimonials";
import Pricing from "../Pages/Pricing";
import Blog from "../Pages/Blog";
import Tech from "../Pages/Tech";
import Discount from "../Pages/Discount";
import Offer from "../Pages/Offer";
import ChorchaStart from "../Pages/ChorchaStart";

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
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/tech",
        element: <Tech></Tech>
      },
      {
        path: "/discount",
        element: <Discount></Discount>
      },
      {
        path: "/offer",
        element: <Offer></Offer>
      },
      {
        path: "/chorchastart",
        element: <ChorchaStart></ChorchaStart>
      }
    ]
  },
]);