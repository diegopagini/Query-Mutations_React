/** @format */
import { Product, ProductCard } from '..';

interface Props {
	products: Product[];
}

export const ProductList = ({ products }: Props) => {
	return (
		<div className='mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 justify-center max-w-max'>
			{products.map((product: Product) => (
				<ProductCard
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};
