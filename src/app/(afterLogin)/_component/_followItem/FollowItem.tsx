"use client";

import style from './followItem.module.css';
import { User } from '@/model/User';

type FollowItemProps = {
    followUser: User
}

const FollowItem = ({ followUser }: FollowItemProps) => {

    const onFollow = () => {};

    return (
        <div className={style.container}>
            <div className={style.userLogoSection}>
                <div className={style.userLogo}>
                    <img src={followUser.image} alt={followUser.id}/>
                </div>
            </div>
            <div className={style.userInfo}>
                <div className={style.title}>{followUser.nickname}</div>
                <div className={style.count}>{followUser.id}</div>
            </div>
            <div className={style.followButtonSection}>
                <button onClick={onFollow}>팔로우</button>
            </div>
        </div>
    )
}

export default FollowItem