/** @format */
import { createBrowserRouter } from 'react-router-dom';

import { ErrorPage } from '../ErrorPage';
import { CompleteListPage, MensPage, NewProduct, StoreLayout, WomensPage } from '../products';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <StoreLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '',
				element: <CompleteListPage />,
			},
			{
				path: 'men',
				element: <MensPage />,
			},
			{
				path: 'women',
				element: <WomensPage />,
			},
			{
				path: 'new',
				element: <NewProduct />,
			},
		],
	},
]);
