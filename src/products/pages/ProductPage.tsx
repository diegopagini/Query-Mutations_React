/** @format */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ProductCard, useProduct } from '..';

export const ProductPage = () => {
	const { id } = useParams();
	const { isLoading, product } = useProduct({ id: +id! });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='flex-col'>
			<h1 className='text-2xl font-bold'>Producto</h1>

			{isLoading && <h1>Cargando...</h1>}

			{product && (
				<ProductCard
					product={product}
					fullDescription
				/>
			)}
		</div>
	);
};
