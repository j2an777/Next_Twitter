"use client";

import PostItem from "@/app/(afterLogin)/_component/_postItem/PostItem";
import { Post } from "@/model/Post";
import { getPostRecommends } from "../../_hooks/getPostRecommends";
import { InfiniteData, useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const PostRecommends = () => {

    const { data, fetchNextPage, hasNextPage, isFetching, isError } = useSuspenseInfiniteQuery<Post[], Object, InfiniteData<Post[]>, [_1: string, _2: string], number>({
        queryKey: ['posts', 'recommends'],
        queryFn: getPostRecommends,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    });

    const { ref, inView } = useInView({
        threshold: 0,
        delay: 0,
    });

    useEffect(() => {
        if (inView) {
            !isFetching && hasNextPage && fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);

    if (isError) {
        return '에러 처리해라';
    }

    return (
        <>
            {data?.pages.map((page, i) => (
                <Fragment key={i}>
                    {page.map((post) => <PostItem key={post.postId} post={ post } />)}
                </Fragment>
            ))}
            <div ref={ref} style={{ height: 50 }} />
        </>
    )
}

export default PostRecommends