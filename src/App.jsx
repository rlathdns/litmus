
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyTestPage from './pages/MyTestPage';


const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element : <HomePage/>
			},
			{
				path : 'myTest',
				element : <MyTestPage/>
			}
		]
	},
	
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
