
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyTestPage from './pages/MyTestPage';
import TestSolvingPage from './pages/TestSolvingPage';


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
			},
		],

	},
	{
		path : 'solving',
		element : <TestSolvingPage/>
	}
	
	
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
