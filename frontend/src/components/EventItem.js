import classes from './EventItem.module.css';
import { Link, useSubmit} from 'react-router-dom';

function EventItem({ event }) {

   const submit = useSubmit();



  function startDeleteHandler() {
    const confirm = window.confirm("Are you sure?")

    if (confirm) {
      submit(null, { method: "delete" })     // submit hat 3 Attribute:
    }                                        // 1. Data-Objekt -> kann mit FormData() ausgelesen werden
                                             // 2. {method: "..."} -> Request Art
                                             // 3. action="pfad" -> Pfad auf dem sich der Action-handler befindet.

  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
