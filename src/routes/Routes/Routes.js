import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../layout/Main";
import News from "../../Pages/News/News";
import Category from "../../Pages/Category/Category";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Login/Register";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path:'/news/:id',
                loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`),
                element:<News></News>
            },
            {
                path:'/category/:id',
                loader:({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element:<Category></Category>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'*',
                element:<div>Not Found</div>
            }
        ]
    }
])