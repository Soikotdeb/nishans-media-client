import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUsPage from "../Pages/Home/AboutUs/AboutUsPage/AboutUsPage";
import Home from "../Pages/Home/Home/Home";

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