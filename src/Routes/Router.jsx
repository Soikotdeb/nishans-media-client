import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUsPage from "../Pages/AboutUs/AboutUsPage/AboutUsPage";
import Home from "../Pages/Home/Home/Home";
import Accounts from "../Pages/Accounts/Accounts";
import ProductSinglePage from "../Pages/ProductSinglePage/ProductSinglePage";

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
                path:'/accounts',
                element:<Accounts />
            },
            {
                path:'/product/:id',
                element: <ProductSinglePage />,
                loader: ({params}) => fetch(`products.json/${params.id}`)
            }
        
        ]
    },
]);

export default router;