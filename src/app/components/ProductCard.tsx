import Image from 'next/image';
import Link from 'next/link';
import {Product} from "@/app/lib/types";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link href={`/product/${product.id}`} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                    src={product.image || "/default.png"}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="object-contain bg-white object-center w-full max-h-[300px]"
                    loading="lazy"
                />
            </div>
            <h2 className="mt-4 text-lg font-semibold line-clamp-1">{product.title}</h2>
            <p className="mt-1 text-sm text-gray-500 line-clamp-3">{product.description.substring(0, 100)}...</p>
            <p className="mt-2 text-lg font-medium text-gray-900">${product.price.toFixed(2)}</p>
        </Link>
    );
}