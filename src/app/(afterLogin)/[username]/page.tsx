import BackButton from '../_component/_backButton/BackButton';
import PostItem from '../_component/_postItem/PostItem';
import style from './profile.module.css';

const Profile = () => {
  const user = {
    id: 'j2an777',
    nickname: '제투앙',
    image: '/5Udwvqim.jpg'
  };

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </main>
  )
}

export default Profile