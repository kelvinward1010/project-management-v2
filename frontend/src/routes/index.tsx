import { createBrowserRouter, Navigate } from "react-router-dom";
import { layoutUrl, signinUrl } from "./urls";
import { Layout } from "../pages/app/Layout";
import { Home } from "../pages/home";
import { ErrorBoundaryPage } from "../components/error/boudary-error";






interface RouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
    const user = true;
    return user ? <>{children}</> : <Navigate to={signinUrl} replace />;
};


export const routers = createBrowserRouter([
    {
        path: layoutUrl,
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
        errorElement: (
            <Layout>
                <ErrorBoundaryPage />
            </Layout>
        ),
        children: [
            {
                path: layoutUrl,
                element: <Home />
            }
        ]
    }
])