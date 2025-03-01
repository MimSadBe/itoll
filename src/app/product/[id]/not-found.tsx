import Link from "next/link"

export default function ProductNotFound() {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-4">We&#39;re sorry, but we couldn&#39;t find the product you&#39;re looking for.</p>
            <Link href="/" className="text-blue-500 hover:underline">
                Return to Home
            </Link>
        </div>
    )
}

