import "./App.css";
import Homepage from "./pages/Homepage";
import Signinpage from "./pages/Signinpage";
import Notfound from "./pages/Notfound";
import Userpage from "./pages/Userpage";
import Usereditpage from "./pages/Usereditpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

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

let persistor = persistStore(store);

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    );
}

export default App;
