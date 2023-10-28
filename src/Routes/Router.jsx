import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUsPage from "../Pages/AboutUs/AboutUsPage/AboutUsPage";
import Home from "../Pages/Home/Home/Home";
import Accounts from "../Pages/Accounts/Accounts";
import ProductsPage from "../Pages/Products/ProductsPage";
import SelectedCategory from "../Pages/Products/SelectedCategory/SelectedCategory";

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
                path: 'accounts',
                element: <Accounts />
            },
            {
                path: 'products-page',
                element: <ProductsPage />,
                loader: () => fetch("/products.json").then(res => res.json())
            },
            {
                path: "/selected/:category",
                element: <SelectedCategory />,
                loader: ({ params }) => fetch("/products.json").then((res) => res.json())
            }


        ]
    },
]);

export default router;