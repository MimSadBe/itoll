"use client"

import { useEffect } from "react"

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong!</h1>
            <p className="mb-4">We&#39;re sorry, but we couldn&#39;t load the product information.</p>
            <button
                onClick={() => reset()}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
                Try again
            </button>
        </div>
    )
}

