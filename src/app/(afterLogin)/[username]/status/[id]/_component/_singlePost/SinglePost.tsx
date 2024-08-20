"use client";

import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Post} from "@/model/Post";
import PostItem from "@/app/(afterLogin)/_component/_postItem/PostItem";
import { getSinglePost } from "../../_hooks/getSinglePost";
import style from './singlePost.module.css';

type UserPostsProps = {
  id: string;
  noImage?: boolean;
}
export default function SinglePost({ id, noImage }: UserPostsProps) {
    const { data: post, error } = useQuery<Post, Object, Post, [_1: string, _2: string]>({
      queryKey: ['posts', id],
      queryFn: getSinglePost,
      staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
      gcTime: 300 * 1000,
    });

    if (error) {
        return (
            <div className={style.noData}>게시글을 찾을 수 없습니다.</div>
        )
    }

    if (!post) return null;

    return <PostItem key={post.postId} post={post} noImage={noImage} />;
}