import Link from "next/link"
import style from './trend.module.css';
import { HashTag } from "@/model/HashTag";

type TrendProps = {
  trend: HashTag
}

const Trend = ({ trend }: TrendProps) => {
  return (
    <Link href={`/search?q=트렌드`} className={style.container}>
        <div className={style.count}>실시간트렌드</div>
        <div className={style.title}>{trend.title}</div>
        <div className={style.count}>
          {trend.count !== undefined && trend.count !== null 
            ? trend.count.toLocaleString() + ' posts' 
            : 'No data available'}
        </div>
    </Link>
  )
}

export default Trend