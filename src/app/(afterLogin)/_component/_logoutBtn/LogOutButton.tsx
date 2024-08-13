"use client";

import Image from 'next/image';
import style from './logOutButton.module.css';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LogOutButton = () => {
    const router = useRouter();
    const { data: me } = useSession();

    const onLogout = () => {
        signOut({ redirect: false })
            .then(() => {
                console.log("Redirecting to '/'");
                router.replace('/');
            });
    };

    if (!me?.user) return null;

    return (
        <button className={style.logOutButton} onClick={onLogout}>
            <div className={style.logOutUserImage}>
                <Image src={me.user?.image as string} alt={me.user?.email as string} width={30} height={40}/>
            </div>
            <div className={style.logOutUserName}>
                <div>{me.user?.name}</div>
                <div>@{me.user?.email}</div>
            </div>
        </button>
    )
}

export default LogOutButton