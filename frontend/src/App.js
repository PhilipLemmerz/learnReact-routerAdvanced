import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './pages/HomePage';
import EditEventPage from './pages/EditEventPage';
import EventDetailPage, { loader as EventDetailLoader, action as EventDeleteAction } from './pages/EventDetailPage';
import EventsPage, { eventsLoader } from './pages/EventsPage';
import NewEventPage, { action as NewEventAction } from './pages/NewEventPage';
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/RootLayout";
import EventsLayout from "./pages/EventsLayout";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        {
          path: '/events', element: <EventsLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsLoader
            },
            { path: 'new', element: <NewEventPage />, action: NewEventAction },
            {
              path: ':id',
              loader: EventDetailLoader,
              id: 'detailEvent',
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: EventDeleteAction
                },
                { path: 'edit', element: <EditEventPage /> }
              ]
            }
          ]
        },
        {
          path: 'newsletter',
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ],
      errorElement: <ErrorPage />
    }
  ])






  return <RouterProvider router={router} />
}

export default App;
