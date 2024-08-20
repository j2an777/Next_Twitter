"use client";

import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Post} from "@/model/Post";
import { getUserPosts } from "../../_hooks/getUserPosts";
import PostItem from "@/app/(afterLogin)/_component/_postItem/PostItem";

type UserPostsProps = {
  username: string;
}
export default function UserPosts({ username }: UserPostsProps) {
  
    const queryClient = useQueryClient();
    const post = queryClient.getQueryData(['users', username]);

    const { data } = useQuery<Post[], Object, Post[], [_1: string, _2: string, _3: string]>({
      queryKey: ['posts', 'users', username],
      queryFn: getUserPosts,
      staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
      gcTime: 300 * 1000,
      enabled: !!post,
    });


    if (post) {
        return data?.map((post) => (
            <PostItem key={post.postId} post={post} />
        ))
    }

    return null;
}