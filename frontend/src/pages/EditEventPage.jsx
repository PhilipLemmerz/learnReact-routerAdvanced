import { useRouteLoaderData } from "react-router-dom"
import EventForm from "../components/EventForm"

export default function EditEventPage() {

    const data = useRouteLoaderData('detailEvent');

    return (
        <>
            <h1> Edit Event Page</h1>

            <EventForm event={data.event} />

        </>
    )
}