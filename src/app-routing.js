import App from "./App";
import SignForm from "./routes/auth/SignForm";
import ErrorPage from './routes/ErrorPage'
import HomePage from './routes/HomePage'
import ImcForm from "./routes/imc/ImcForm";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/auth",
        element: <SignForm />
    },
    {
        path: "/imc",
        element: <ImcForm/>
    },

    ]
    }
])

export default router