import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Category } from '@/types/category.type';
interface iProps {
  categories: Category[];
}

const CategoriesList = ({ categories }: iProps) => {
  return (
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
                <img src={category.image} className='text-4xl mb-2' />
                <CardTitle className='text-center'>{category.name}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesList;
