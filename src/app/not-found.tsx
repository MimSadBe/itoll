import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-4">The page you&#39;re looking for doesn&#39;t exist.</p>
            <Link href="/" className="text-blue-500 hover:underline">
                Go back to home
            </Link>
        </div>
    );
}