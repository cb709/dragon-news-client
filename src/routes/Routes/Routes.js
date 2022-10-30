import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../layout/Main";
import News from "../../Pages/News/News";
import Category from "../../Pages/Category/Category";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/news/:id',
                element:<News></News>
            },
            {
                path:'/category/:id',
                element:<Category></Category>
            },
            {
                path:'*',
                element:<div>Not Found</div>
            }
        ]
    }
])