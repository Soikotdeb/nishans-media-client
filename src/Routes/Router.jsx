import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AboutUsPage from "../Pages/Home/AboutUs/AboutUsPage/AboutUsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
              path: '/',
              element: <Home></Home>
            },
            {
              path: '/about',
              element: <AboutUsPage></AboutUsPage>
            },
        
        ]
    },
]);

export default router;