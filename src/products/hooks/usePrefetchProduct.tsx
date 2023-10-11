/** @format */
import { useQueryClient } from '@tanstack/react-query';

import { productActions } from '..';

export const usePrefecthProduct = () => {
	const queryClient = useQueryClient();

	const prefetchProduct = (id: number) => {
		queryClient.prefetchQuery(['product', id], () => productActions.getProductById(id));
	};

	return prefetchProduct;
};
