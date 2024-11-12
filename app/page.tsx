import * as React from 'react';

import HomeBanner from '@/components/HomeBanner';
import CategoriesList from '@/components/CategoriesList';
import ProductCard from '@/components/ProductCard';
import axios from 'axios';
import { Category } from '@/types/category.type';
import { Product } from '@/types/product.type';

export default async function HomePage() {
  const resCategories = await axios.get(
    'https://api.escuelajs.co/api/v1/categories'
  );

  const resProduct = await axios.get(
    'https://api.escuelajs.co/api/v1/products'
  );
  const categories: Category[] = resCategories.data;
  const products: Product[] = resProduct.data;

  return (
    <>
      <HomeBanner />
      <CategoriesList categories={categories.slice(0, 6)} />

      <section className='w-full py-12'>
        <div className='container mx-auto px-4 md:px-6'>
          <h2 className='text-3xl font-semibold tracking-tighter mb-8'>
            Featured Products
          </h2>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {products.slice(0, 12).map((product) => (
              <ProductCard product={product} />
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
