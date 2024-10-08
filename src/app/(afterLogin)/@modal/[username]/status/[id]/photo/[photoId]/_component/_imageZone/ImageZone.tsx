"use client";

import ActionButtons from "@/app/(afterLogin)/_component/_actionButtons/ActionButtons"
import style from './imageZone.module.css';
import { useQuery } from "@tanstack/react-query";
import { Post } from "@/model/Post";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_hooks/getSinglePost";

type ImageZoneProps = {
    id: string;
}

const ImageZone = ({ id }: ImageZoneProps) => {
    const { data: post } = useQuery<Post, Object, Post, [_1: string, _2: string]>({
        queryKey: ['posts', id],
        queryFn: getSinglePost,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
    });

    if (!post?.Images[0]) return null;

    return (
        <div className={style.imageZone}>
            <img src={post.Images[0].link} alt={post.content} />
            <div className={style.image} style={{ backgroundImage: `url(${post.Images[0].link})`}} />
            <div className={style.buttonZone}>
                <div className={style.buttonInner}>
                    <ActionButtons white />
                </div>
            </div>
        </div>
    )
}

export default ImageZone