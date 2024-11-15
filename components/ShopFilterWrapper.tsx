'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star, ChevronDown, Filter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Category } from '../types/category.type';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import {
	useParams,
	usePathname,
	useRouter,
	useSearchParams,
} from 'next/navigation';
import { Product } from '@/types/product.type';

interface iProps {
	categories: Category[];
	products: Product[];
}

export default function ShopFilterWrapper({ categories, products }: iProps) {
	const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);
	const [filters, setFilters] = React.useState({
		category: [],
		brand: [],
		size: [],
		color: [],
		price: [0, 200],
		gender: [],
	});

	React.useEffect(() => {
		setFilteredProducts(products);
	}, [products]);

	const searchParams = useSearchParams();
	const categoryIds = searchParams.get('categoryId')?.split(',') || [];

	const router = useRouter();
	const pathname = usePathname();

	console.log('pathname: ', pathname);
	console.log('categoryIds: ', categoryIds);

	const applyFilters = () => {
		// const newFilteredProducts = products.filter((product) => {
		// 	return (
		// 		(filters.category.length === 0 ||
		// 			filters.category.includes(product.category)) &&
		// 		(filters.brand.length === 0 || filters.brand.includes(product.brand)) &&
		// 		(filters.size.length === 0 ||
		// 			(product.size && filters.size.includes(product.size))) &&
		// 		(filters.color.length === 0 || filters.color.includes(product.color)) &&
		// 		product.price >= filters.price[0] &&
		// 		product.price <= filters.price[1] &&
		// 		(filters.gender.length === 0 || filters.gender.includes(product.gender))
		// 	);
		// });
		// setFilteredProducts(newFilteredProducts);
	};

	React.useEffect(() => {
		applyFilters();
	}, [filters]);

	const handleCheckboxChange = (filterType: string, value: string) => {
		// setFilters((prevFilters) => ({
		// 	...prevFilters,
		// 	[filterType]: prevFilters[filterType].includes(value)
		// 		? prevFilters[filterType].filter((item) => item !== value)
		// 		: [...prevFilters[filterType], value],
		// }));
	};

	const handleToggleCategory = (id: number) => {
		router.push(`/shop?categoryId=${id}`);
		// const newPath = `/${locale}${pathname}`;
		// router.refresh();
		// if (categoryIds?.includes(String(id))) {
		// 	if (categoryIds.length > 1) {
		// 		router.replace(
		// 			`/shop?categoryId=${categoryIds
		// 				.filter((item) => item != String(id))
		// 				.join(',')}`
		// 		);
		// 	} else {
		// 		router.replace('/shop');
		// 	}
		// } else {
		// 	router.replace(`/shop?categoryId=${[...categoryIds, id].join(',')}`);
		// }
	};

	return (
		<div className='container mx-auto px-4 py-8'>
			{/* <h1 className='text-3xl font-bold mb-8'>Shop</h1> */}
			<div className='flex flex-col md:flex-row gap-8'>
				<aside className='w-full md:w-1/4 space-y-6'>
					<div className='md:hidden'>
						<Sheet>
							<SheetTrigger asChild>
								<Button variant='outline' className='w-full'>
									<Filter className='mr-2 h-4 w-4' /> Filters
								</Button>
							</SheetTrigger>
							<SheetContent side='left' className='w-[300px] sm:w-[400px]'>
								<SheetHeader>
									<SheetTitle>Filters</SheetTitle>
									<SheetDescription>
										Narrow down your product search
									</SheetDescription>
								</SheetHeader>
								<div className='py-4 space-y-6'>
									<div className='space-y-2'>
										<h3 className='font-semibold'>Categories</h3>
										{categories.map((item) => (
											<div
												key={item.id}
												className='flex items-center space-x-2'
											>
												<Checkbox
													id={`category`}

													// onCheckedChange={() =>
													// 	// handleCheckboxChange(filterType, item)
													// }
												/>
												<Label htmlFor={`'category`}>{item.name}</Label>
											</div>
										))}
									</div>

									<div className='space-y-2'>
										<h3 className='font-semibold'>Price Range</h3>
										<Slider
											min={0}
											max={200}
											step={1}
											value={filters.price}
											onValueChange={(value) =>
												setFilters({ ...filters, price: value })
											}
										/>
										<div className='flex justify-between'>
											<span>${filters.price[0]}</span>
											<span>${filters.price[1]}</span>
										</div>
									</div>
								</div>
								<SheetFooter>
									<SheetClose asChild>
										<Button type='submit'>Apply Filters</Button>
									</SheetClose>
								</SheetFooter>
							</SheetContent>
						</Sheet>
					</div>
					<div className='hidden md:block space-y-6'>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Categories</h3>
							{categories.map((item) => (
								<div key={item.id} className='flex items-center space-x-2'>
									<Checkbox
										id={`category`}
										checked={categoryIds?.includes(String(item.id))}
										onCheckedChange={() => {
											handleToggleCategory(item.id);
										}}
									/>
									<Label htmlFor={`'category`}>{item.name}</Label>
								</div>
							))}
						</div>
						<div className='space-y-2'>
							<h3 className='font-semibold'>Price Range</h3>
							<Slider
								min={0}
								max={200}
								step={1}
								value={filters.price}
								onValueChange={(value) =>
									setFilters({ ...filters, price: value })
								}
							/>
							<div className='flex justify-between'>
								<span>${filters.price[0]}</span>
								<span>${filters.price[1]}</span>
							</div>
						</div>
					</div>
				</aside>
				<main className='w-full md:w-3/4'>
					<div className='flex justify-between items-center mb-4'>
						<p className='text-sm text-gray-500'>
							{filteredProducts.length} products found
						</p>
						<Select>
							<SelectTrigger className='w-[180px]'>
								<SelectValue placeholder='Sort by' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='price-low-high'>
									Price: Low to High
								</SelectItem>
								<SelectItem value='price-high-low'>
									Price: High to Low
								</SelectItem>
								<SelectItem value='rating-high-low'>
									Rating: High to Low
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
						{filteredProducts.map((product) => (
							<Card key={product.id} className='overflow-hidden'>
								<CardHeader className='p-0'>
									<img
										src={product.images[0]}
										alt={product.title}
										width={300}
										height={300}
										className='object-cover w-full h-[200px]'
									/>
								</CardHeader>
								<CardContent className='p-4'>
									<CardTitle className='text-lg'>{product.title}</CardTitle>
									<p className='text-sm text-gray-500'>
										{product.category.name}
									</p>
									<p className='text-sm font-semibold mt-2'>
										${product.price.toFixed(2)}
									</p>
									<div className='flex items-center mt-2'>
										{Array.from({ length: 5 }).map((_, i) => (
											<Star
												key={i}
												className={`w-4 h-4 ${
													i < Math.floor(3)
														? 'text-yellow-400 fill-current'
														: 'text-gray-300'
												}`}
											/>
										))}
										<span className='ml-2 text-sm text-gray-500'>({3})</span>
									</div>
								</CardContent>
								<CardFooter className='p-4'>
									<Button className='w-full'>Add to Cart</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</main>
			</div>
		</div>
	);
}
