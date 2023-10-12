/** @format */

export interface Product {
	category: Category;
	description: string;
	id: number;
	image: string;
	price: number;
	rating?: Rating;
	title: string;
}

export type Category = 'electronics' | 'jewelery' | "men's clothing" | "women's clothing";

export interface Rating {
	rate: number;
	count: number;
}

export interface ProductLike {
	category: Category;
	description: string;
	id?: number;
	image: string;
	price: number;
	title: string;
}
