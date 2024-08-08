"use client";

import { useRouter } from 'next/navigation';
import style from './postArticle.module.css';
import { ReactNode } from "react";

type PostArticleProps = {
    children: ReactNode,
    post: {
        postId: number,
        User: {
            id: string,
            nickname: string,
            image: string
        },
        content: string,
        createdAt: Date,
        Images: any[]
    }
}

const PostArticle = ({ children, post }: PostArticleProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/${post.User.id}/status/${post.postId}`);
    };

    return (
        <article onClickCapture={onClick} className={style.post}>
            {children}
        </article>
    )
}

export default PostArticle