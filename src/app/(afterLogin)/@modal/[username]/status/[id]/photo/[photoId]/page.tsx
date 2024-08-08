
import ActionButtons from '@/app/(afterLogin)/_component/_actionButtons/ActionButtons';
import style from './pageModal.module.css';
import { faker } from '@faker-js/faker';
import PostItem from '@/app/(afterLogin)/_component/_postItem/PostItem';
import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm';
import PhotoModalCloseButton from './_component/PhotoModalCloseButton';

const PageModal = () => {

    const photo = {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
        Post: {
            content: faker.lorem.text()
        }
    };

    return (
        <div className={style.container}>
            <PhotoModalCloseButton />
            <div className={style.imageZone}>
                <img src={photo.link} alt={photo.Post.content} />
                <div className={style.image} style={{ backgroundImage: `url(${photo.link})`}} />
                <div className={style.buttonZone}>
                    <div className={style.buttonInner}>
                        <ActionButtons white />
                    </div>
                </div>
            </div>
            <div className={style.commentZone}>
                <PostItem noImage/>
                <CommentForm />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    )
}

export default PageModal