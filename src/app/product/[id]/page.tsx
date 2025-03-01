import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Product } from '@/app/lib/types';

async function getProduct(id: string): Promise<Product> {
  const baseUrl = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL || 'https://itoll-task.vercel.app/api' : 'http://localhost:3000/api';
  const res = await fetch(`${baseUrl}/products/${id}`);
  if (!res.ok) notFound();
  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={product.image || '/assets/images/default.png'}
            alt={product.title}
            width={500}
            height={500}
            className="object-cover object-center w-full h-full"
            fetchPriority={'high'}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-8">{product.description}</p>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Category</h2>
            <p>{product.category.name}</p>
          </div>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg opacity-70 transition-colors cursor-not-allowed opax">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

