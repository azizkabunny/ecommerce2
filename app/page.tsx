'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Search, ShoppingBag, ChevronDown, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const categories = [
  { name: 'Electronics', icon: '💻' },
  { name: 'Clothing', icon: '👕' },
  { name: 'Home & Garden', icon: '🏡' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Beauty', icon: '💄' },
  { name: 'Books', icon: '📚' },
];

const products = [
  {
    name: 'Wireless Earbuds',
    price: 79.99,
    rating: 4.5,
    image:
      'https://i.etsystatic.com/8088492/r/il/b2443d/3868645104/il_570xN.3868645104_58y5.jpg',
  },
  {
    name: 'Smart Watch',
    price: 199.99,
    rating: 4.2,
    image: '/placeholder.svg?height=200&width=200&text=Smart+Watch',
  },
  {
    name: 'Laptop',
    price: 999.99,
    rating: 4.8,
    image: '/placeholder.svg?height=200&width=200&text=Laptop',
  },
  {
    name: 'Smartphone',
    price: 699.99,
    rating: 4.6,
    image: '/placeholder.svg?height=200&width=200&text=Smartphone',
  },
  {
    name: 'Bluetooth Speaker',
    price: 59.99,
    rating: 4.3,
    image: '/placeholder.svg?height=200&width=200&text=Speaker',
  },
  {
    name: 'Gaming Console',
    price: 399.99,
    rating: 4.7,
    image: '/placeholder.svg?height=200&width=200&text=Console',
  },
  {
    name: 'Fitness Tracker',
    price: 89.99,
    rating: 4.4,
    image: '/placeholder.svg?height=200&width=200&text=Tracker',
  },
  {
    name: 'Tablet',
    price: 299.99,
    rating: 4.5,
    image: '/placeholder.svg?height=200&width=200&text=Tablet',
  },
];

// const brands = [
//   {
//     name: 'TechGiant',
//     logo: '/placeholder.svg?height=100&width=100&text=TechGiant',
//   },
//   {
//     name: 'FashionHub',
//     logo: '/placeholder.svg?height=100&width=100&text=FashionHub',
//   },
//   {
//     name: 'HomeDecor',
//     logo: '/placeholder.svg?height=100&width=100&text=HomeDecor',
//   },
//   {
//     name: 'SportsMaster',
//     logo: '/placeholder.svg?height=100&width=100&text=SportsMaster',
//   },
// ];

export default function HomePage() {
  return (
    <>
      <section className='w-full py-12'>
        <div className=' container mx-auto px-4 md:px-6'>
          <Carousel className=' min-w-full max-w-5xl mx-auto'>
            <CarouselContent>
              {[
                {
                  title: 'Summer Sale',
                  description: 'Up to 50% off on selected items',
                  color: 'bg-blue-100',
                },
                {
                  title: 'New Arrivals',
                  description: 'Check out our latest collection',
                  color: 'bg-green-100',
                },
                {
                  title: 'Free Shipping',
                  description: 'On orders over $100',
                  color: 'bg-yellow-100',
                },
              ].map((banner, index) => (
                <CarouselItem key={index}>
                  <div className='p-1'>
                    <Card className={banner.color}>
                      <CardContent className='flex aspect-[16/4] items-center justify-center p-6'>
                        <div className='text-center'>
                          <h2 className='text-2xl font-bold mb-2'>
                            {banner.title}
                          </h2>
                          <p className='text-muted-foreground'>
                            {banner.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section className='w-full py-12 bg-gray-100'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl font-semibold tracking-tighter mb-8'>
            Shop by Category
          </h2>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {categories.map((category) => (
              <Card
                key={category.name}
                className='hover:shadow-lg transition-shadow'
              >
                <CardContent className='flex flex-col items-center justify-center p-6'>
                  <span className='text-4xl mb-2'>{category.icon}</span>
                  <CardTitle className='text-center'>{category.name}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className='w-full py-12'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl font-semibold tracking-tighter mb-8'>
            Featured Products
          </h2>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {products.map((product) => (
              <Card
                key={product.name}
                className='overflow-hidden hover:shadow-lg transition-shadow'
              >
                <CardHeader className='p-0'>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className='object-cover w-full h-[200px]'
                  />
                </CardHeader>
                <CardContent className='p-4'>
                  <CardTitle className='text-lg'>{product.name}</CardTitle>
                  <p className='text-sm text-muted-foreground mt-2'>
                    ${product.price.toFixed(2)}
                  </p>
                  <div className='flex items-center mt-2'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className='ml-2 text-sm text-muted-foreground'>
                      ({product.rating})
                    </span>
                  </div>
                </CardContent>
                <CardFooter className='p-4'>
                  <Button className='w-full'>Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* <section className='w-full py-12 bg-gray-100'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl font-semibold tracking-tighter mb-8'>
            Our Brands
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {brands.map((brand) => (
              <Card
                key={brand.name}
                className='hover:shadow-lg transition-shadow'
              >
                <CardContent className='flex items-center justify-center p-6'>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={100}
                    height={100}
                    className='object-contain'
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
