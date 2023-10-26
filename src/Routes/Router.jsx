import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUsPage from "../Pages/AboutUs/AboutUsPage/AboutUsPage";
import Home from "../Pages/Home/Home/Home";
import Accounts from "../Pages/Accounts/Accounts";

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
            {
                path:'accounts',
                element:<Accounts />
            }
        
        ]
    },
]);

export default router;