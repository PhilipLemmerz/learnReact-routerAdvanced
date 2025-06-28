import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";


export default function Layout() {

    const { state } = useNavigation()
    return (
        <>
            <MainNavigation />
            <Outlet />
            {state === "loading" && <p style={{ color: "white" }}> Loading ...</p>}

        </>
    )
}