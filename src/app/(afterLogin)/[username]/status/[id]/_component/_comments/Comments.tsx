"use client";

import { Post } from "@/model/Post";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getComments } from "../../_hooks/getComments";
import PostItem from "@/app/(afterLogin)/_component/_postItem/PostItem";

type CommentsProps = {
    id: string;
}

const Comments = ({ id }: CommentsProps) => {
    const { data } = useQuery<Post[], Object, Post[], [_1: string, _2: string, _3: string]>({
        queryKey: ['posts', id, 'comments'],
        queryFn: getComments,
        staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
        gcTime: 300 * 1000,
    });

    const queryClient = useQueryClient();
    const post = queryClient.getQueryData(['posts', id]);

    if (post) {
        return data?.map((post) => <PostItem post={post} key={post.postId} />);
    };

    return null;
}

export default Comments