import {
    createBrowserRouter,
} from "react-router-dom";
import App from '../App';
import SignIn from '../auth/sign-in';
import ErrorPage from "../components/error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
]);


export default router;