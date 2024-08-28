import { createHashRouter, redirect, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import LayoutPage from "./pages/LayoutPage/LayoutPage";

const Routes = () => {
    const routers = createHashRouter([
        {
            path: "",
            element: <LayoutPage />,
            children: [
                { index: true, loader: () => redirect("home") },
                { path: "home", element: <Home /> },

            ],
        },



    ]);

    return <RouterProvider router={routers} />;
}

export default Routes;
