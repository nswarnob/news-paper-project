import {createBrowserRouter} from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../components/PrivateRoute";

export const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <HomeLayouts></HomeLayouts>,
            children:[
                {
                    path:"",
                    element:<Home></Home>,

                },
                {
                    path:"/category/:id",
                    element:<CategoryNews></CategoryNews>,
                    loader: ()=>fetch("/news.json"),
                },
            ]
        },
        {
            path:'/auth',
            element: <AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>
                },
                {
                    path:'/auth/register',
                    element:<Register></Register>
                }
            ]
        },
        {
            path:'/news-details/:id',
            element: <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>,
            loader: ()=>fetch("/news.json")
        },
        {
            path:'/*',
            element: <h1>error</h1>
        }
    ]
)
