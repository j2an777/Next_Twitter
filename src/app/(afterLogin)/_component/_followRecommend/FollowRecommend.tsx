import FollowItem from '../_followItem/FollowItem';
import style from './followRecommend.module.css';

const FollowRecommend = () => {
  return (
    <div className={style.followRecommend}>
      <h3>팔로우 추천</h3>
      <FollowItem />
      <FollowItem />
      <FollowItem />
    </div>
  )
}

export default FollowRecommend