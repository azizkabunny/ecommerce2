import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { Card, CardContent } from '@/components/ui/card';

const HomeBanner = () => {
  return (
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
  );
};

export default HomeBanner;
