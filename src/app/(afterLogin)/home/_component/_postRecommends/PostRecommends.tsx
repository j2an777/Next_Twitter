"use client";

import PostItem from "@/app/(afterLogin)/_component/_postItem/PostItem";
import { Post } from "@/model/Post";
import { useQuery } from "@tanstack/react-query";
import { getPostRecommends } from "../../_hooks/getPostRecommends";

const PostRecommends = () => {

    const { data } = useQuery<Post[]>({
        queryKey: ['posts', 'recommends'],
        queryFn: () => getPostRecommends(),
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
    });

    return data?.map((post) => (
        <PostItem key={post.postId} post={ post } />
    ))
}

export default PostRecommends