'use client';

import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CreditCard } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
// import { useToast } from '@/components/ui/use-toast';

// Mock data for cart items (usually this would come from a global state or context)
const cartItems = [
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

export default function CheckoutPage() {
  const router = useRouter();
  // const { toast } = useToast();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const shipping = 10; // Flat rate shipping
  const total = subtotal + tax + shipping;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically process the payment and create the order
    // toast({
    //   title: 'Order placed successfully!',
    //   description: 'Thank you for your purchase.',
    // });
    router.push('/order-confirmation');
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-semibold mb-8'>Checkout</h1>
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='lg:w-2/3'>
          <form onSubmit={handleSubmit}>
            <Card className='mb-8'>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <Label htmlFor='firstName'>First Name</Label>
                    <Input id='firstName' required />
                  </div>
                  <div>
                    <Label htmlFor='lastName'>Last Name</Label>
                    <Input id='lastName' required />
                  </div>
                </div>
                <div>
                  <Label htmlFor='address'>Address</Label>
                  <Input id='address' required />
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <Label htmlFor='city'>City</Label>
                    <Input id='city' required />
                  </div>
                  <div>
                    <Label htmlFor='postalCode'>Postal Code</Label>
                    <Input id='postalCode' required />
                  </div>
                </div>
                <div>
                  <Label htmlFor='country'>Country</Label>
                  <Select required>
                    <SelectTrigger id='country'>
                      <SelectValue placeholder='Select a country' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='us'>United States</SelectItem>
                      <SelectItem value='ca'>Canada</SelectItem>
                      <SelectItem value='uk'>United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
            <Card className='mb-8'>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue='card'>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='card' id='card' />
                    <Label htmlFor='card'>Credit Card</Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='paypal' id='paypal' />
                    <Label htmlFor='paypal'>PayPal</Label>
                  </div>
                </RadioGroup>
                <div className='mt-4 space-y-4'>
                  <div>
                    <Label htmlFor='cardNumber'>Card Number</Label>
                    <Input
                      id='cardNumber'
                      placeholder='1234 5678 9012 3456'
                      required
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <Label htmlFor='expiryDate'>Expiry Date</Label>
                      <Input id='expiryDate' placeholder='MM/YY' required />
                    </div>
                    <div>
                      <Label htmlFor='cvv'>CVV</Label>
                      <Input id='cvv' placeholder='123' required />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button type='submit' className='w-full'>
              <CreditCard className='mr-2 h-4 w-4' /> Place Order
            </Button>
          </form>
        </div>
        <div className='lg:w-1/3'>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review your order details</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className='flex justify-between items-center'
                >
                  <div className='flex items-center space-x-4'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className='rounded-md'
                    />
                    <div>
                      <p className='font-medium'>{item.name}</p>
                      <p className='text-sm text-gray-500'>
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <div className='w-full space-y-2'>
                <div className='flex justify-between'>
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className='flex justify-between font-semibold'>
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
