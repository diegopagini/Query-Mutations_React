/** @format */
import { useQuery } from '@tanstack/react-query';

import { productActions } from '..';

interface Options {
	id: number;
}

export const useProduct = ({ id }: Options) => {
	const {
		data: product,
		error,
		isError,
		isFetching,
		isLoading,
	} = useQuery(['products', id], () => productActions.getProductById(id), {
		staleTime: 1000 * 60 * 60,
	});

	return {
		error,
		isError,
		isFetching,
		isLoading,
		product,
	};
};
