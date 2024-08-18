"use client";

import { useQuery } from '@tanstack/react-query';
import FollowItem from '../_followItem/FollowItem';
import style from './followRecommend.module.css';
import { User } from '@/model/User';
import { getFollowRecommends } from './_hooks/getFollowRecommends';

const FollowRecommend = () => {
  const { data } = useQuery<User[]>({
    queryKey: ['users', 'followRecommends'],
    queryFn: getFollowRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return (
    <div className={style.followRecommend}>
      <h3>팔로우 추천</h3>
      {data?.map((user) => <FollowItem followUser={user} key={user.id} />)}
    </div>
  )
}

export default FollowRecommend