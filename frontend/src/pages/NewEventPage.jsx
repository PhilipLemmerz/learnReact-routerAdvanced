import { redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function NewEventPage() {


    return (
        <>
            <h1> New Event Page</h1>
            <EventForm />

        </>
    )
}


export async function action({ request, params }) {
    const data = await request.formData();

    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    }

    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData)
    })


    if (response.status === 422) {
        return response
    }

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'POST Event Request failed' }), { status: 500 })
    }

    return redirect('/events')

}