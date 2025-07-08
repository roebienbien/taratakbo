import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import store from './store/store.ts';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RunningPage from './pages/RunningPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import HomePage from './pages/homepage/sections/HomePage.tsx';
import Workouts from './pages/homepage/sections/Workouts.tsx';
import WorkoutDetail from './pages/homepage/sections/WorkoutDetail.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
			{
				path: 'workouts',
				element: <Workouts />,
				children: [
					{
						path: ':workoutId', //dynamic segment
						element: <WorkoutDetail />
					}
				]
			},
      {
        path: '/running/:runningId',
        element: <RunningPage />,
      },

    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
  </StrictMode>,
);
