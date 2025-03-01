'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { debounce } from '@/app/lib/utils';

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [search, setSearch] = useState(searchParams.get('query') || '');

    const debouncedSearch = debounce((value: string) => {
        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set('query', value);
        } else {
            params.delete('query');
        }

        router.push(`/?${params.toString()}`);
    }, 300);

    useEffect(() => {
        debouncedSearch(search);
    }, [search]);

    return (
        <div className="relative w-full max-w-md mx-auto">
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="absolute left-3 top-0 bottom-0 my-auto w-5 h-5 text-gray-400">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
                <path d="M21 21l-6 -6"/>
            </svg>
        </div>
    );
}
