import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './pages/HomePage';
import EditEventPage from './pages/EditEventPage';
import EventDetailPage from './pages/EventDetailPage';
import EventsPage, { eventsLoader } from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage';
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/RootLayout";
import EventsLayout from "./pages/EventsLayout";


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
            { path: 'new', element: <NewEventPage /> },
            { path: ':id', element: <EventDetailPage /> },
            { path: ':id/edit', element: <EditEventPage /> }
          ]
        },
      ],
      errorElement: <ErrorPage />
    }
  ])






  return <RouterProvider router={router} />
}

export default App;
