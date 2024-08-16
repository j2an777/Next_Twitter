import Link from 'next/link';
import style from './postItem.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from '../_actionButtons/ActionButtons';
import PostArticle from '../_postArticle/PostArticle';
import { faker } from '@faker-js/faker';
import Image from 'next/image';
import PostImages from '../_postImages/PostImages';
import { Post } from '@/model/Post';

dayjs.locale('ko');
dayjs.extend(relativeTime);

type PostItemProps = {
  noImage?: boolean;
  post: Post;
}

const PostItem = ({ noImage, post }: PostItemProps) => {
  
  if (Math.random() > 0.5 && !noImage) {
    post.Images.push({ imageId: 1, link: faker.image.urlLoremFlickr() });
    post.Images.push({ imageId: 2, link: faker.image.urlLoremFlickr() });
    post.Images.push({ imageId: 3, link: faker.image.urlLoremFlickr() });
    post.Images.push({ imageId: 4, link: faker.image.urlLoremFlickr() });
  }

  return (
    <PostArticle post={post}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${post.User.id}`} className={style.postUserImage}>
            <img src={post.User.image} alt={post.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${post.User.id}`}>
              <span className={style.postUserName}>{post.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{post.User.id}</span>
              &nbsp;
              ·
              &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(post.createdAt).fromNow(true)}</span>
          </div>
          <div>{post.content}</div>
          <div>
            <PostImages post={post}/>
          </div>
          <ActionButtons white />
        </div>
      </div>
    </PostArticle>
  )
}

export default PostItem