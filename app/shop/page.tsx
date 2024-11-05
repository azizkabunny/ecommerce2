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

const categories = [
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports',
  'Beauty',
  'Books',
];
const brands = [
  'TechGiant',
  'FashionHub',
  'HomeDecor',
  'SportsMaster',
  'BeautyGlow',
  'BookWorm',
];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White'];
const genders = ['Men', 'Women', 'Unisex'];

const products = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    price: 79.99,
    rating: 4.5,
    image: '/placeholder.svg?height=200&width=200&text=Earbuds',
    category: 'Electronics',
    brand: 'TechGiant',
    color: 'White',
    gender: 'Unisex',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    rating: 4.2,
    image: '/placeholder.svg?height=200&width=200&text=Smart+Watch',
    category: 'Electronics',
    brand: 'TechGiant',
    color: 'Black',
    gender: 'Unisex',
  },
  {
    id: 3,
    name: "Men's T-Shirt",
    price: 24.99,
    rating: 4.0,
    image: '/placeholder.svg?height=200&width=200&text=T-Shirt',
    category: 'Clothing',
    brand: 'FashionHub',
    size: 'M',
    color: 'Blue',
    gender: 'Men',
  },
  {
    id: 4,
    name: "Women's Dress",
    price: 89.99,
    rating: 4.7,
    image: '/placeholder.svg?height=200&width=200&text=Dress',
    category: 'Clothing',
    brand: 'FashionHub',
    size: 'S',
    color: 'Red',
    gender: 'Women',
  },
  {
    id: 5,
    name: 'Table Lamp',
    price: 49.99,
    rating: 4.3,
    image: '/placeholder.svg?height=200&width=200&text=Lamp',
    category: 'Home & Garden',
    brand: 'HomeDecor',
    color: 'Yellow',
    gender: 'Unisex',
  },
  {
    id: 6,
    name: 'Yoga Mat',
    price: 29.99,
    rating: 4.6,
    image: '/placeholder.svg?height=200&width=200&text=Yoga+Mat',
    category: 'Sports',
    brand: 'SportsMaster',
    color: 'Green',
    gender: 'Unisex',
  },
  {
    id: 7,
    name: 'Face Cream',
    price: 34.99,
    rating: 4.4,
    image: '/placeholder.svg?height=200&width=200&text=Face+Cream',
    category: 'Beauty',
    brand: 'BeautyGlow',
    gender: 'Unisex',
  },
  {
    id: 8,
    name: 'Novel',
    price: 14.99,
    rating: 4.8,
    image: '/placeholder.svg?height=200&width=200&text=Novel',
    category: 'Books',
    brand: 'BookWorm',
    gender: 'Unisex',
  },
];

export default function ShopPage() {
  const [filteredProducts, setFilteredProducts] = React.useState(products);
  const [filters, setFilters] = React.useState({
    category: [],
    brand: [],
    size: [],
    color: [],
    price: [0, 200],
    gender: [],
  });

  const applyFilters = () => {
    const newFilteredProducts = products.filter((product) => {
      return (
        (filters.category.length === 0 ||
          filters.category.includes(product.category)) &&
        (filters.brand.length === 0 || filters.brand.includes(product.brand)) &&
        (filters.size.length === 0 ||
          (product.size && filters.size.includes(product.size))) &&
        (filters.color.length === 0 || filters.color.includes(product.color)) &&
        product.price >= filters.price[0] &&
        product.price <= filters.price[1] &&
        (filters.gender.length === 0 || filters.gender.includes(product.gender))
      );
    });
    setFilteredProducts(newFilteredProducts);
  };

  React.useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleCheckboxChange = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value],
    }));
  };

  const FilterSection = ({ title, items, filterType }) => (
    <div className='space-y-2'>
      <h3 className='font-semibold'>{title}</h3>
      {items.map((item) => (
        <div key={item} className='flex items-center space-x-2'>
          <Checkbox
            id={`${filterType}-${item}`}
            checked={filters[filterType].includes(item)}
            onCheckedChange={() => handleCheckboxChange(filterType, item)}
          />
          <Label htmlFor={`${filterType}-${item}`}>{item}</Label>
        </div>
      ))}
    </div>
  );

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
                  <FilterSection
                    title='Categories'
                    items={categories}
                    filterType='category'
                  />
                  <FilterSection
                    title='Brands'
                    items={brands}
                    filterType='brand'
                  />
                  <FilterSection
                    title='Sizes'
                    items={sizes}
                    filterType='size'
                  />
                  <FilterSection
                    title='Colors'
                    items={colors}
                    filterType='color'
                  />
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
                  <FilterSection
                    title='Gender'
                    items={genders}
                    filterType='gender'
                  />
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
            <FilterSection
              title='Categories'
              items={categories}
              filterType='category'
            />
            <FilterSection title='Brands' items={brands} filterType='brand' />
            <FilterSection title='Sizes' items={sizes} filterType='size' />
            <FilterSection title='Colors' items={colors} filterType='color' />
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
            <FilterSection title='Gender' items={genders} filterType='gender' />
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
                  <p className='text-sm text-gray-500'>{product.category}</p>
                  <p className='text-sm font-semibold mt-2'>
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
                    <span className='ml-2 text-sm text-gray-500'>
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
        </main>
      </div>
    </div>
  );
}
