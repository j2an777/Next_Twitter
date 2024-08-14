"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

type RQProviderProps = {
    children: React.ReactNode
}

const RQProvider = ({ children }: RQProviderProps) => {
    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    retryOnMount: true,
                    refetchOnReconnect: false,
                    retry: false
                },
            },
        })
    );
    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local' } />
        </QueryClientProvider>
    )
}

export default RQProvider