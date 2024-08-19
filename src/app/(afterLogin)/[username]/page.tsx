import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import style from './profile.module.css';
import UserPosts from './_component/_userPosts/UserPosts';
import { getUserPosts } from './_hooks/getUserPosts';
import { getUser } from './_hooks/getUser';
import UserInfo from './_component/_userInfo/UserInfo';

type ProFileProps = {
  params: { username: string }
}

const Profile = async ({ params }: ProFileProps) => {
  const { username } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['users', username],
    queryFn: getUser,
  });

  await queryClient.prefetchQuery({
    queryKey: ['posts', 'users', username],
    queryFn: getUserPosts,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
      <UserInfo username={username} />
      <div>
        <UserPosts username={username} />
      </div>
      </HydrationBoundary>
    </main>
  )
}

export default Profile