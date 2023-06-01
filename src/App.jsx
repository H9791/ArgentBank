import './App.css'
import Homepage from 'src/pages/Homepage'
import Signinpage from 'src/pages/Signinpage'
import Notfound from 'src/pages/Notfound'
import Userpage from 'src/pages/Userpage'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'src/redux/store'
import { CookieProvider } from 'react-cookie'

//ReactRouter 6.11 (2023)
const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "/signin",
        element: <Signinpage />,
    },
    {
        path: "/user",
        element: <Userpage />
    },
    {
        path: "*",
        element: <Notfound />
    }])

function App() {
    return (
        <CookieProvider>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </CookieProvider>
    )
}

export default App
