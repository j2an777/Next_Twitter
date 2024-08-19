"use client";

import { useQuery } from "@tanstack/react-query";
import BackButton from "../../../_component/_backButton/BackButton";
import style from './userInfo.module.css';
import { User } from "@/model/User";
import { getUser } from "../../_hooks/getUser";

type UserInfoProps = {
    username: string;
}

const UserInfo = ({ username }: UserInfoProps) => {
    const { data: user, error } = useQuery<User, Object, User, [_1: string, _2: string]>({
        queryKey: ['users', username],
        queryFn: getUser,                   
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
    });

    if (error) {
        return (
            <>
                <div className={style.header}>
                    <BackButton />
                    <h3 className={style.headerTitle}>프로필</h3>
                </div>
                <div className={style.userZone}>
                    <div className={style.userImage}>
                    </div>
                    <div className={style.userName}>
                        <div>@{username}</div>
                    </div>
                </div>
                <div className={style.noData}>
                    계정이 존재하지 않음
                </div>
            </>
        )
    }

    if (!user) return null;

    return (
        <>
            <div className={style.header}>
                <BackButton />
                <h3 className={style.headerTitle}>{user.nickname}</h3>
            </div>
            <div className={style.userZone}>
                <div className={style.userImage}>
                    <img src={user.image} alt={user.id} />
                </div>
                <div className={style.userName}>
                    <div>{user.nickname}</div>
                    <div>@{user.id}</div>
                </div>
                <button className={style.followButton}>팔로우</button>
            </div>
        </>
    )
}

export default UserInfo