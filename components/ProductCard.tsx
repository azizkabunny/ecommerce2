'use client';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product.type';
interface iProps {
	product: Product;
}
const ProductCard = ({ product }: iProps) => {
	console.log('product: ', product);
	return (
		<Card className='overflow-hidden hover:shadow-lg transition-shadow'>
			<CardHeader className='p-0'>
				<img
					// src={product.images[0]}
					src=''
					alt={product.title}
					width={300}
					height={300}
					className='object-cover w-full h-[200px]'
				/>
			</CardHeader>
			<CardContent className='p-4'>
				<CardTitle className='text-lg'>{product.title}</CardTitle>
				<p className='text-sm text-muted-foreground mt-2'>
					${product.price.toFixed(2)}
				</p>
				<div className='flex items-center mt-2'>
					{Array.from({ length: 5 }).map((_, i) => (
						<Star
							key={i}
							className={`w-4 h-4 ${
								i < 3 ? 'text-yellow-400 fill-current' : 'text-gray-300'
							}`}
						/>
					))}
					<span className='ml-2 text-sm text-muted-foreground'>({3})</span>
				</div>
			</CardContent>
			<CardFooter className='p-4'>
				<Button className='w-full'>Add to Cart</Button>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
