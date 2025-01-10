import { Outlet } from "react-router-dom";

interface Props {
    children?: React.ReactNode;
}

export function Layout({ children }: Props) {
    return (
        <div>
            <div>
                <header />
            </div>
            <div>
                <Outlet />
                {children}
            </div>
            <footer />
        </div>
    );
}