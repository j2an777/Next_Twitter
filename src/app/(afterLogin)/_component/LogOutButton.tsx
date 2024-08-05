"use client";
import Image from 'next/image';
import style from './LogOutButton.module.css';

const LogOutButton = () => {
    const me = { // 임시로 내 정보 있는것처럼
        id: 'j2an777',
        nickname: '즤니',
        image: '/5Udwvqim.jpg'
    }

    const onLogout = () => {

    };

    return (
        <button className={style.logOutButton} onClick={onLogout}>
            <div className={style.logOutUserImage}>
                <Image src={me.image} alt={me.id} width={30} height={40}/>
            </div>
            <div className={style.logOutUserName}>
                <div>{me.nickname}</div>
                <div>@{me.id}</div>
            </div>
        </button>
    )
}

export default LogOutButton