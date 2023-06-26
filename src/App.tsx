import "./App.css";
import Homepage from "./pages/Homepage";
import Signinpage from "./pages/Signinpage";
import Notfound from "./pages/Notfound";
import Userpage from "./pages/Userpage";
import Usereditpage from "./pages/Usereditpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

//ReactRouter 6.11 (2023)
const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/signin",
        element: <Signinpage />,
    },
    {
        path: "/user",
        element: <Userpage />,
    },
    {
        path: "/useredit",
        element: <Usereditpage />,
    },
    {
        path: "*",
        element: <Notfound />,
    },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
