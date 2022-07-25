import { css } from "@emotion/css"
import {Routes as ReactRouterRoutes, Route, Outlet, Link} from "react-router-dom"
import { TextButton } from "./components/atoms/TextButton/TextButton"
import { Login } from "./components/pages/Login"
import { Top } from "./components/pages/Top"
import { AppLayout } from "./components/templates/AppLayout/AppLayout"
import { useAppSelector } from "./helper/store"

export const Routes = () => {
    const {loggedIn} = useAppSelector(({auth: {loggedIn}}) => ({loggedIn}))
    return (
        <ReactRouterRoutes>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            {loggedIn && (
                <Route path="/" element={<AppLayout><Outlet /></AppLayout>}>
                    <Route path="" element={<Top />} />
                </Route>
            )}
        </ReactRouterRoutes>
    )
}

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <h1>Oops!! Page not found!</h1>
            <Link to="/login">
                <TextButton>ログインする</TextButton>
            </Link>
        </div>
    )
}

const styles = {
    notFound: css({
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    })
}