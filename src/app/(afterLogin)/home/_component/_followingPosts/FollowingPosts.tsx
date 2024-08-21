"use client";

import PostItem from "@/app/(afterLogin)/_component/_postItem/PostItem";
import { Post } from "@/model/Post";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getFollowingPosts } from "../../_hooks/getFollowingPosts";

const FollowingPosts = () => {

    const { data } = useSuspenseQuery<Post[]>({
        queryKey: ['posts', 'followings'],
        queryFn: () => getFollowingPosts(),
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
    });

    return data?.map((post) => (
        <PostItem key={post.postId} post={ post } />
    ))
}

export default FollowingPosts