import { useNavigate, Form, useNavigation, useActionData } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  const data = useActionData();

  const submitting = useNavigation().state === 'submitting';

  return (
    // action="any-other-path-with-action" -> wir können mit dem Attribut das form von einer action Property auf einem anderen Path handeln lassen
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event ? event.title : null} required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : null} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : null} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : null} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={submitting}>{submitting ? 'submitting...' : 'submit'}</button>
      </div>
      {data && data.errors && <p> Please check your entered values </p>}
    </Form>

  );
}

export default EventForm;
