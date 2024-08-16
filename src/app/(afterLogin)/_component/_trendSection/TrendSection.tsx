"use client";

import { usePathname } from 'next/navigation';
import Trend from '../_trend/Trend';
import style from './trendSection.module.css';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { getTrends } from './_hooks/getTrends';
import { HashTag } from '@/model/HashTag';

const TrendSection = () => {
  const { data: session } = useSession();

  const { data } = useQuery<HashTag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: !!session?.user // session user정보가 있어야지만 돌아가도록
  });

  const pathname = usePathname();
  if (pathname === '/explore') return null;

  if (session?.user) {
    return (
      <div className={style.trendBg}>
          <div className={style.trend}>
              <h3>나를 위한 트렌드</h3>
              {data?.map((trend) => <Trend trend={trend} key={trend.tagId} />)}
          </div>
      </div>
    );
  }
  return (
    <div className={style.trendBg}>
      <div className={style.noTrend}>
        트렌드를 가져올 수 없습니다.
      </div>
    </div>
  )
}

export default TrendSection