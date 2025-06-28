import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    if (error.status === 500) {
        return (<p> An Server Error Occured</p>)
    }

    if (error.status === 404) {
        return (<p> The Side is not reachable</p>)
    }
}