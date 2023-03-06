import App from "./App";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import SignForm from "./routes/auth/SignForm";
import ErrorPage from './routes/ErrorPage'
import HomePage from './routes/HomePage'
import ImcDisplay from "./routes/imc/ImcDisplay";
import ImcForm from "./routes/imc/ImcForm";
import ImcsList from "./routes/imc/ImcsList";


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
        element: <ProtectedRoute><ImcForm/></ProtectedRoute>
    },
    {
        path: "/affichage",
        element: <ProtectedRoute><ImcsList/></ProtectedRoute>
    },

    ]
    }
])

export default router