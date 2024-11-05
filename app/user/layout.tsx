'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
const links = [
  {
    title: 'Dashboard',
    path: '/user/dashboard',
  },
  {
    title: 'Orders',
    path: '/user/orders',
  },
  {
    title: 'Wishlist',
    path: '/user/wishlist',
  },
  {
    title: 'Address',
    path: '/user/address',
  },
];
const layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10'>
        <div className='mx-auto grid w-full max-w-6xl gap-2'>
          <h1 className='text-3xl font-semibold'>Dashboard</h1>
        </div>
        <div className='mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]'>
          <nav
            className='grid gap-4 text-sm text-muted-foreground'
            x-chunk='dashboard-04-chunk-0'
          >
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={
                  pathname == item.path ? 'font-semibold text-primary' : ''
                }
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className='grid gap-6'>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default layout;
