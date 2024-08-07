"use client";
import { ReactNode } from "react";
import style from './layout.module.css';
import Link from "next/link";
import Image from "next/image";
import ZLogo from '../../../public/zlogo.png';
import NavMenu from "./_component/_navmenu/NavMenu";
import LogOutButton from "./_component/_logoutBtn/LogOutButton";
import TrendSection from "./_component/_trendSection/TrendSection";
import FollowRecommend from "./_component/_followRecommend/FollowRecommend";
import RightSearchZone from "./_component/_rightSearchZone/RightSearchZone";

type AfterLoginLayoutProps = {
    children: ReactNode;
    modal: ReactNode;
}

export default function AfterLoginLayout({ children, modal }: AfterLoginLayoutProps) {
    return (
        <div className={style.container}>
            <header className={style.leftSectionWrapper}>
                <section className={style.leftSection}>
                    <div className={style.leftSectionFixed}>
                        <Link className={style.logo} href="/home">
                            <div className={style.logoPill}>
                                <Image src={ZLogo} alt="logo" width={40} height={40}/>
                            </div>
                        </Link>
                        <nav>
                            <ul>
                                <NavMenu />
                            </ul>
                            <Link href="/compose/tweet" className={style.postButton}>게시하기</Link>
                        </nav>
                        <LogOutButton />
                    </div>
                </section>
            </header>
            <div className={style.rightSectionWrapper}>
                <div className={style.rightSectionInner}>
                    <main className={style.main}>{children}</main>
                    <section className={style.rightSection}>
                        <RightSearchZone />
                        <TrendSection />
                        <FollowRecommend />
                    </section>
                </div>
            </div>
            {modal}
        </div>
    )
}