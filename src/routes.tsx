import {Routes as ReactRouterRoutes, Route, Outlet, RoutesProps} from "react-router-dom"
import { Login } from "./components/pages/Login"
import { Top } from "./components/pages/Top"
import { AppLayout } from "./components/templates/AppLayout/AppLayout"

export const Routes = () => {
    return (
        <ReactRouterRoutes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<AppLayout><Outlet /></AppLayout>}>
                <Route path="" element={<Top />} />
            </Route>
        </ReactRouterRoutes>
    )
}
