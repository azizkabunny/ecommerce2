'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
// import { useToast } from '@/components/ui/use-toast';

// Mock data for cart items
const initialCartItems = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    price: 79.99,
    quantity: 1,
    image: '/placeholder.svg?height=100&width=100&text=Earbuds',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    quantity: 1,
    image: '/placeholder.svg?height=100&width=100&text=Smart+Watch',
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = React.useState(initialCartItems);
  // const { toast } = useToast();

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    // toast({
    //   title: 'Item removed',
    //   description: 'The item has been removed from your cart.',
    // });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-medium mb-8'>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className='text-center py-8'>
          <p className='text-xl mb-4'>Your cart is empty</p>
          <Link href='/shop'>
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='lg:w-2/3'>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className='flex items-center space-x-4'>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                          className='rounded-md'
                        />
                        <span>{item.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className='flex items-center space-x-2'>
                        <Button
                          size='icon'
                          variant='outline'
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className='h-4 w-4' />
                        </Button>
                        <Input
                          type='number'
                          min='1'
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                          className='w-16 text-center'
                        />
                        <Button
                          size='icon'
                          variant='outline'
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className='h-4 w-4' />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>${item.price.toFixed(2)}</TableCell>
                    <TableCell>
                      ${(item.price * item.quantity).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Button
                        size='icon'
                        variant='ghost'
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className='h-4 w-4' />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className='lg:w-1/3'>
            <div className='bg-gray-100 p-6 rounded-lg'>
              <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
              <div className='space-y-2 mb-4'>
                <div className='flex justify-between'>
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className='flex justify-between font-semibold'>
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Link href='/checkout'>
                <Button className='w-full'>Proceed to Checkout</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
