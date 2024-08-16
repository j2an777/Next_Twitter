"use client";

import PostItem from '@/app/(afterLogin)/_component/_postItem/PostItem';
import { useQuery } from '@tanstack/react-query'
import { getSearchResult } from '../../_hooks/getSearchResult';
import { Post } from '@/model/Post';

type SearchResultProps = {
    searchParams: {
        q: string,
        f?: string,
        pf?: string
    }
}

const SearchResult = ({ searchParams }: SearchResultProps) => {

    const { data } = useQuery<Post[], Object, Post[], [_1: string, _2: string, SearchResultProps['searchParams']]>({
        queryKey: ['posts', 'search', searchParams],
        queryFn: getSearchResult, // queryFn에 queryKey를 전달하도록 설정
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
    });

    return data?.map((post) => (
        <PostItem key={post.postId} post={post} />
    ))
}

export default SearchResult;