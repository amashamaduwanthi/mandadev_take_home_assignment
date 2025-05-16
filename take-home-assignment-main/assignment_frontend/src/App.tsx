import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from 'react-router';
import './App.css'
import AuthLayout from "./components/AuthLayOut.tsx";

import {store} from "./store/store.ts";
import {SignIn} from "./pages/SignIn.tsx";
import Signup from "./pages/SignUp.tsx";

function App() {
    const routes=createBrowserRouter([
        {
            path: "",
            element: <AuthLayout />,
            children: [
                { path: "/signin", element: <SignIn /> },
                { path: "", element: <Signup /> },
            ],
        },



    ])


    return (
        <>
            <Provider store={store}>
                <RouterProvider router={routes}/>
            </Provider>
        </>
    )
}

export default App
