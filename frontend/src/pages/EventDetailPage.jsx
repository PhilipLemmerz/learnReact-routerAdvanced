import { redirect, useRouteLoaderData } from "react-router-dom"
import EventItem from '../components/EventItem'

export default function EventDetailPage() {

    // const data = useLoaderData();
    const data = useRouteLoaderData('detailEvent') 


    return (
        <>
            <h1> Event Detail Page</h1>
            <EventItem event={data.event} />
        </>
    )
}

export async function loader({ request, params }) {
    const eventID = params.id;

    const response = await fetch(`http://localhost:8080/events/${eventID}`)

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: "loading Event failed" }), { status: 500 });
    }

    return response
}

export async function action({ request, params }) {
    const eventID = params.id;

    const response = await fetch(`http://localhost:8080/events/${eventID}`, {
        method: request.method
    })
   

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: "loading Event failed" }), { status: 500 });
    }

    return redirect('/events')
}