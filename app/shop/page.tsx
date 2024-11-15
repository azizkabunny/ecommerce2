import ShopFilterWrapper from '@/components/ShopFilterWrapper';

interface iProps {
	searchParams: Promise<{ [key: string]: string | undefined }>;
}
const page = async ({ searchParams }: iProps) => {
	const { categoryId } = await searchParams;

	const productsApi = categoryId
		? `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`
		: 'https://api.escuelajs.co/api/v1/products/?offset=1&limit=20';

	const [categories, products] = await Promise.all([
		fetch('https://api.escuelajs.co/api/v1/categories').then((res) =>
			res.json()
		),
		fetch(productsApi).then((res) => res.json()),
	]);

	return <ShopFilterWrapper products={products} categories={categories} />;
};

export default page;

// 'use client';

// import ShopFilterWrapper from '@/components/ShopFilterWrapper';
// import { Category } from '@/types/category.type';
// import { Product } from '@/types/product.type';
// import { useSearchParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const page = () => {
// 	const [categories, setCategories] = useState<Category[]>([]);
// 	const [products, setProducts] = useState<Product[]>([]);
// 	const [loading, setLoading] = useState(true);
// 	const searchParams = useSearchParams();
// 	const categoryIds = searchParams.get('categoryId')?.split(',') || [];
// 	const categoryId = categoryIds[0];
// 	useEffect(() => {
// 		fetchData(categoryId);
// 	}, [categoryId]);

// 	const fetchData = async (categoryId: string | undefined) => {
// 		setLoading(true);
// 		const productsApi = categoryId
// 			? `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`
// 			: 'https://api.escuelajs.co/api/v1/products/?offset=1&limit=20';

// 		const [categories, products] = await Promise.all([
// 			fetch('https://api.escuelajs.co/api/v1/categories').then((res) =>
// 				res.json()
// 			),
// 			fetch(productsApi).then((res) => res.json()),
// 		]);

// 		setCategories(categories);
// 		setProducts(products);
// 		setLoading(false);
// 	};

// 	if (loading) {
// 		return <div>Loading...</div>;
// 	}
// 	return <ShopFilterWrapper products={products} categories={categories} />;
// };

// export default page;

// ssr
// 1. fetch data
// 2. render data

// client side
// 1. render
// 2. fetch data
// 3. render with data
