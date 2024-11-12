import ShopFilterWrapper from '@/components/ShopFilterWrapper';
import axios from 'axios';

const page = async (props: {
	searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
	const searchParams = await props.searchParams;
	const selectedCategoryIds = searchParams.categoryId?.split(',') || []; // Get selected categories from URL
	const resCategories = await axios.get(
		'https://api.escuelajs.co/api/v1/categories'
	);

	const resProducts = await fetch(
		`https://api.escuelajs.co/api/v1/products?categoryId=${selectedCategoryIds[0]}`,
		{
			cache: 'no-store',
		}
	);

	const products = await resProducts.json();

	return (
		<ShopFilterWrapper products={products} categories={resCategories.data} />
	);
};

export default page;
