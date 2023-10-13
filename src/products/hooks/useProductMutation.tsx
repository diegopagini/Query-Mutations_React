/** @format */
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Product, productActions } from '..';

export const useProductMutation = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: productActions.createProduct,
		// Optimistic updates:
		onMutate: (product: Product) => {
			console.log('Mutate - Optimistic update');
			// Optimistic product.
			const optimisticProduct: Product = { ...product, id: Math.random() };
			// Store the product in cache from query client.
			queryClient.setQueryData<Product[]>(['products', { filterKey: product.category }], (old) => {
				if (!old) return [optimisticProduct];

				return [...old, optimisticProduct];
			});

			return { optimisticProduct };
		},
		onSuccess: (product: Product, _variables, context) => {
			// To force the refresh of the data after a product is created.
			// queryClient.invalidateQueries(['products', { filterKey: data.category }]);
			queryClient.removeQueries(['product', context?.optimisticProduct.id]);
			// To avoid to do a new request.
			queryClient.setQueryData<Product[]>(
				['products', { filterKey: product.category }],
				(oldState) => {
					if (!oldState) return [product];

					return oldState.map((cacheProduct: Product) =>
						cacheProduct.id === context?.optimisticProduct.id ? product : cacheProduct
					);
				}
			);
		},
		onError: (_error, variables, context) => {
			queryClient.removeQueries(['product', context?.optimisticProduct.id]);

			queryClient.setQueryData<Product[]>(
				['products', { filterKey: variables.category }],
				(oldState) => {
					if (!oldState) return [];

					return oldState.filter(
						(cacheProduct: Product) => cacheProduct.id !== context?.optimisticProduct.id
					);
				}
			);
		},
	});

	return mutation;
};
