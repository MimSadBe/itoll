import {Suspense} from 'react';
import ProductList from "@/app/components/ProductList";
import SearchBar from "@/app/components/SearchBar";
import Loading from "@/app/loading";
import Image from "next/image";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'e-commerce product listing',
  description: 'This is an advanced e-commerce product listing application built with Next.js and TypeScript.',
}

export default function Home({searchParams}: { searchParams: { query?: string }; }) {
    const query = searchParams?.query || "";

    return (
        <main className="container mx-auto px-4 py-8">
            <div className={"flex items-center mb-8 max-lg:flex-col max-lg:gap-2"}>
                <Image
                    src={"/assets/images/logo.svg"}
                    alt={"itoll"}
                    width={100}
                    height={50}
                />
                <SearchBar/>
            </div>
            <Suspense fallback={<Loading/>}>
                <ProductList query={query}/>
            </Suspense>
        </main>
    );
}