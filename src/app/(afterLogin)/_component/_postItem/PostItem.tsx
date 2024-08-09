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

dayjs.locale('ko');
dayjs.extend(relativeTime);

type PostItemProps = {
  noImage?: boolean;
}

const PostItem = ({ noImage }: PostItemProps) => {
  const target = {
    postId: 1,
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/yRsRRjGO.jpg'
    },
    content: '클론코딩 트위터',
    createdAt: new Date(),
    Images: [] as any[],
  };

  if (Math.random() > 0.5 && !noImage) {
    target.Images.push({ imageId: 1, link: faker.image.urlLoremFlickr() });
    target.Images.push({ imageId: 2, link: faker.image.urlLoremFlickr() });
    target.Images.push({ imageId: 3, link: faker.image.urlLoremFlickr() });
    target.Images.push({ imageId: 4, link: faker.image.urlLoremFlickr() });
  }

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp;
              ·
              &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div>{target.content}</div>
          <div>
            <PostImages post={target}/>
          </div>
          <ActionButtons white />
        </div>
      </div>
    </PostArticle>
  )
}

export default PostItem