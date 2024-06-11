
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyTestPage from './pages/MyTestPage';
import TestSolvingPage from './pages/TestSolvingPage';
import MyTestSubmitPage from './pages/MyTestPageSubmit';
import { TestProvider } from './contexts/TestContext';

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element : <HomePage />
			},
			{
				path : 'myTest',
				element : <MyTestPage />
			},
			{
				path : 'myTest/submited',
				element : <MyTestSubmitPage/>
			}
		],

	},
	{
		path : 'solving',
		element : <TestSolvingPage />
	}

	
	
]);

function App() {

  return (
		<TestProvider>
			<RouterProvider router={router} />
		</TestProvider>
  )
}

export default App;
