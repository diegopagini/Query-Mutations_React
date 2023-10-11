/** @format */
import { ProductList, useProducts } from '..';

export const CompleteListPage = () => {
	const { isLoading, products } = useProducts({});

	return (
		<div className='flex-col'>
			<h1 className='text-2xl font-bold'>Todos los productos</h1>

			{isLoading && <h1>Cargando...</h1>}

			<ProductList products={products} />
		</div>
	);
};
