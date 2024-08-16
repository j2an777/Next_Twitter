import PostForm from './_component/_postForm/PostForm';
import Tab from './_component/_tab/Tab';
import style from './home.module.css';
import TabProvider from './_component/TabProvider';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getPostRecommends } from './_hooks/getPostRecommends';
import TabDecider from './_component/_tabDecider/TabDecider';

const Home = async () => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['posts', 'recommends'],
        queryFn: () => getPostRecommends(),
    });

    const dehydratedState = dehydrate(queryClient);

    return (
        <main className={style.main}>
            <HydrationBoundary state={dehydratedState}>
                <TabProvider>
                    <Tab />
                    <PostForm />
                    <TabDecider />
                </TabProvider>
            </HydrationBoundary>
        </main>
    )
}

export default Home;