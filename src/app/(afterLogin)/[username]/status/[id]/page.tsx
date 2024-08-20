import BackButton from '@/app/(afterLogin)/_component/_backButton/BackButton';
import style from './singlePost.module.css';
import CommentForm from './_component/_commentForm/CommentForm';
import SinglePost from './_component/_singlePost/SinglePost';
import Comments from './_component/_comments/Comments';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getSinglePost } from './_hooks/getSinglePost';
import { getComments } from './_hooks/getComments';

type SinglePostProps = {
  params: { id: string };
}

const SinglePostSection = async ({ params }: SinglePostProps) => {
  const { id } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['posts', id],
    queryFn: getSinglePost
  });
  await queryClient.prefetchQuery({
    queryKey: ['posts', id, 'comments'],
    queryFn: getComments
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <div className={style.header}>
            <BackButton />
            <h3 className={style.headerTitle}>게시하기</h3>
        </div>
        <SinglePost id={id} />
        <CommentForm id={id}/>
        <div>
          <Comments id={id}/>
        </div>
      </HydrationBoundary>
    </main>
  )
}

export default SinglePostSection