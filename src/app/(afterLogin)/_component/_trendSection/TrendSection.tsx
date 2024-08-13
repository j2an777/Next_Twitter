"use client";

import { usePathname } from 'next/navigation';
import Trend from '../_trend/Trend';
import style from './trendSection.module.css';
import { useSession } from 'next-auth/react';

const TrendSection = () => {
  const pathname = usePathname();
  const { data } = useSession();
  if (pathname === '/explore') return null;

  if (data?.user) {
    return (
      <div className={style.trendBg}>
          <div className={style.trend}>
              <h3>나를 위한 트렌드</h3>
              <Trend />
              <Trend />
              <Trend />
              <Trend />
              <Trend />
              <Trend />
              <Trend />
              <Trend />
              <Trend />
              <Trend />
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