import { Product } from '@/app/lib/types';
import ProductCard from '@/app/components/ProductCard';

async function getProducts(query?: string): Promise<Product[]> {
  const baseUrl = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL || 'https://itoll-task.vercel.app/api' : 'http://localhost:3000/api';
  const url = `${baseUrl}/products${query ? `?query=${query}` : ''}`;
  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function ProductList({ query }: { query?: string }) {
  const products = await getProducts(query);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="col-span-full text-center py-10 text-gray-500">No products found</p>
      )}
    </section>
  );
}