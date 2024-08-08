import BackButton from '@/app/(afterLogin)/_component/_backButton/BackButton';
import style from './singlePost.module.css';
import PostItem from '@/app/(afterLogin)/_component/_postItem/PostItem';
import CommentForm from './_component/CommentForm';

const SinglePost = () => {
  return (
    <main className={style.main}>
        <div className={style.header}>
            <BackButton />
            <h3 className={style.headerTitle}>게시하기</h3>
        </div>
        <PostItem />
        <CommentForm />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
    </main>
  )
}

export default SinglePost