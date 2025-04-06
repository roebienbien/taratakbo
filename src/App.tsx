import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/homepage/sections/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import RunningPage from './pages/running-page/RunningPage.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts'
import Workouts from './pages/homepage/sections/Workouts.tsx';
import WorkoutDetail from './pages/homepage/sections/WorkoutDetail.tsx';



const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: <Layout />,
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

const App = () => {
  return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	)
};
export default App;
