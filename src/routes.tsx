import { css } from "@emotion/css"
import {Routes as ReactRouterRoutes, Route, Outlet, Link} from "react-router-dom"
import { Button } from "./components/atoms/Button/Button"
import { Login } from "./components/pages/Login"
import { MyPage } from "./components/pages/MyPage/MyPage"
import { RegistProfile } from "./components/pages/RegistProfile"
import { Signup } from "./components/pages/Signup"
import { Top } from "./components/pages/Top"
import { AppLayout } from "./components/templates/AppLayout/AppLayout"
import { PublicRoutesLayout } from "./components/templates/PublicRoutesLayout/PublicRoutesLayout"
import { useAppSelector } from "./helper/store"

export const Routes = () => {
    const {loggedIn} = useAppSelector(({auth: {loggedIn}}) => ({loggedIn}))
    return (
        <ReactRouterRoutes>
            {/* PublicRoutes */}
            <Route path="*" element={<NotFound />} />
            <Route element={<PublicRoutesLayout><Outlet /></PublicRoutesLayout>}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/edit" element={<RegistProfile />} />
            </Route>
            {/* PrivateRoutes */}
            {loggedIn && (
                <Route element={<AppLayout><Outlet /></AppLayout>}>
                    <Route path="/" element={<Top />} />
                    <Route path="/mypage" element={<MyPage />} />
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
                <Button variant="text">ログインする</Button>
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