import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../layout/Main";
import News from "../../Pages/News/News";
import Categories from "../../Pages/Categories/Categories";

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
                path:'/news',
                element:<News></News>
            },
            {
                path:'/category/:id',
                element:<Categories></Categories>
            },
            {
                path:'*',
                element:<div>Not Found</div>
            }
        ]
    }
])