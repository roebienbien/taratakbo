import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/homepage/sections/HomePage';
import NotFoundPage from './pages/NotFoundPage';
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
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
