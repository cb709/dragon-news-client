import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../layout/Main";
import News from "../../Pages/News/News";
import Category from "../../Pages/Category/Category";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Login/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://dragon-news-server-cb709.vercel.app/news"),
      },
      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(`https://dragon-news-server-cb709.vercel.app/news/${params.id}`),
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`https://dragon-news-server-cb709.vercel.app/category/${params.id}`),
        element: <Category></Category>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
]);
