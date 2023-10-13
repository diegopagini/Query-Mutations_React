/** @format */
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Product, productActions } from '..';

export const useProductMutation = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: productActions.createProduct,
		onSuccess: (data: Product) => {
			// To force the refresh of the data after a product is created.
			queryClient.invalidateQueries(['products', { filterKey: data.category }]);
		},
	});

	return mutation;
};
