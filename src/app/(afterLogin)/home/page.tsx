import PostForm from './_component/_postForm/PostForm';
import Tab from './_component/_tab/Tab';
import style from './home.module.css';
import TabProvider from './_component/TabProvider';
import { Suspense } from 'react';
import TabDeciderSuspense from './_component/_tabdeciderSuspense/TabDeciderSuspense';
import Loading from './loading';

const Home = async () => {

    return (
        <main className={style.main}>
            <TabProvider>
                <Tab />
                <PostForm />
                <Suspense fallback={<Loading />}>
                    <TabDeciderSuspense />
                </Suspense>
            </TabProvider>
        </main>
    )
}

export default Home;