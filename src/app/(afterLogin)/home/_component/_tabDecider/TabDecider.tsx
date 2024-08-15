"use client";

import { useContext } from "react"
import { TabContext } from "../TabProvider";
import PostRecommends from "../_postRecommends/PostRecommends";
import FollowingPosts from "../_followingPosts/FollowingPosts";

const TabDecider = () => {
    const { tab } = useContext(TabContext);

    if (tab === 'rec') {
        return <PostRecommends />
    }

    return <FollowingPosts />
}

export default TabDecider