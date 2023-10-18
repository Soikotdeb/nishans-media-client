import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
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
                path:'accounts',
                element:<Accounts />
            }
        
        ]
    },
]);

export default router;