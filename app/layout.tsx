'use client';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, Search, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

const categories = [
  { name: 'Electronics', icon: '💻' },
  { name: 'Clothing', icon: '👕' },
  { name: 'Home & Garden', icon: '🏡' },
  { name: 'Sports', icon: '⚽' },
  { name: 'Beauty', icon: '💄' },
  { name: 'Books', icon: '📚' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <html lang='en'>
      <body className={` antialiased`}>
        <div className='flex flex-col min-h-screen'>
          <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container mx-auto flex h-16 items-center'>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant='ghost'
                    className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden'
                  >
                    <Menu className='h-6 w-6' />
                    <span className='sr-only'>Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
                  <nav className='flex flex-col gap-4'>
                    <Link href='/' className='flex items-center'>
                      <ShoppingBag className='h-6 w-6 mr-2 text-red-400' />
                      <span className='font-bold text-xl text-red-400'>
                        Beauty Store
                      </span>
                    </Link>
                    <Link
                      href='/products'
                      className='text-sm font-medium hover:underline'
                    >
                      All Products
                    </Link>
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={`/category/${category.name.toLowerCase()}`}
                        className='text-sm font-medium hover:underline'
                      >
                        {category.icon} {category.name}
                      </Link>
                    ))}
                    {/* <Link
                      href='/brands'
                      className='text-sm font-medium hover:underline'
                    >
                      Brands
                    </Link> */}
                    <Link
                      href='/about'
                      className='text-sm font-medium hover:underline'
                    >
                      About
                    </Link>
                    <Link
                      href='/contact'
                      className='text-sm font-medium hover:underline'
                    >
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <Link href='/' className='mr-6 flex items-center space-x-2'>
                <ShoppingBag className='h-6 w-6 text-red-400' />
                <span className='font-bold inline-block text-2xl text-red-400'>
                  Beauty Store
                </span>
              </Link>
              <nav className='hidden lg:flex gap-6 ml-6'>
                <Link
                  className='text-sm font-medium hover:underline underline-offset-4'
                  href='/products'
                >
                  All Products
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className='flex items-center text-sm font-medium hover:underline underline-offset-4'>
                    Categories <ChevronDown className='ml-1 h-4 w-4' />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {categories.map((category) => (
                      <DropdownMenuItem key={category.name}>
                        <Link
                          href={`/category/${category.name.toLowerCase()}`}
                          className='flex items-center'
                        >
                          <span className='mr-2'>{category.icon}</span>{' '}
                          {category.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                {/* <Link
                  className='text-sm font-medium hover:underline underline-offset-4'
                  href='/brands'
                >
                  Brands
                </Link> */}
                <Link
                  className='text-sm font-medium hover:underline underline-offset-4'
                  href='/about'
                >
                  About
                </Link>
                <Link
                  className='text-sm font-medium hover:underline underline-offset-4'
                  href='/contact'
                >
                  Contact
                </Link>
              </nav>
              <div className='flex flex-1 items-center justify-end space-x-4'>
                <div className='relative hidden lg:flex w-full max-w-sm items-center'>
                  <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                  <Input
                    type='search'
                    placeholder='Search products...'
                    className='pl-8 w-full'
                  />
                </div>
                <Button
                  onClick={() => router.push('/cart')}
                  variant='ghost'
                  size='icon'
                  className='relative'
                >
                  <ShoppingBag className='h-5 w-5' />
                  <Badge className='absolute -right-1 -top-1 h-5 w-5 flex justify-center rounded-full p-0 text-xs'>
                    0
                  </Badge>
                  <span className='sr-only'>Cart</span>
                </Button>
              </div>
            </div>
          </header>
          <main className='flex-1'>{children}</main>
          <footer className='w-full border-t py-6'>
            <div className='container px-4 md:px-6'>
              <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='flex items-center space-x-4'>
                  <ShoppingBag className='h-6 w-6' />
                  <span className='font-semibold'>Beauty Store</span>
                </div>
                <nav className='flex gap-4 mt-4 md:mt-0'>
                  <Link
                    className='text-sm hover:underline underline-offset-4'
                    href='#'
                  >
                    Terms of Service
                  </Link>
                  <Link
                    className='text-sm hover:underline underline-offset-4'
                    href='#'
                  >
                    Privacy Policy
                  </Link>
                </nav>
              </div>
              <p className='mt-4 text-center text-sm text-muted-foreground'>
                © 2024 Beauty Store. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
