
import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  if (data.status === 500) {
    return <p>{data.body}</p>
  }

  // die über laoder geladenen Daten können auch direkt in allen hier eingebundenen Components 
  // geladen werden.
  return (
    <>

      <EventsList events={data.events} />

    </>
  );
}

export default EventsPage

export async function eventsLoader() {
  const res = await fetch('http://localhost:8080/evets');
  if (!res.ok) {
    // return { status: 500, body: 'Could not fetch data' }
    throw new Response(JSON.stringify({ message: "failed Loadung" }), { status: 500 }); // nearest Error Element aus dem router wird gesucht und gerendert

  } else {
    // const data = await res.json(); // Optinal -> react übernimmt die convertierung von Promise zum Response(data, {status: ..}) Objekt.
    return res
  }
}


