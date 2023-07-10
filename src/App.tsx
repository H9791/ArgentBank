import "./App.css";
import Formsignin from "./components/Formsignin";
import Notfound from "./components/Notfound";
import Mainuser from "./components/Mainuser";
import Edituser from "./components/Edituser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Main from "./components/Main";
import RootLayout from "./pages/RootLayout";
import Logged from "./components/Logged";
//ReactRouter 6.11 (2023)
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Notfound />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/signin",
                element: <Formsignin />,
            },
            {
                path: "/logged",
                element: <Logged />,
            },
        ],
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
