import PostForm from './_component/_postForm/PostForm';
import PostItem from '../_component/_postItem/PostItem';
import Tab from './_component/_tab/Tab';
import style from './home.module.css';
import TabProvider from './_component/TabProvider';

const Home = () => {
    return (
        <main className={style.main}>
            <TabProvider>
                <Tab />
                <PostForm />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </TabProvider>
        </main>
    )
}

export default Home;