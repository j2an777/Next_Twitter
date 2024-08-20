
import style from './pageModal.module.css';
import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_component/_commentForm/CommentForm';
import PhotoModalCloseButton from './_component/_photoModalCloseButton/PhotoModalCloseButton';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import SinglePost from '@/app/(afterLogin)/[username]/status/[id]/_component/_singlePost/SinglePost';
import Comments from '@/app/(afterLogin)/[username]/status/[id]/_component/_comments/Comments';
import ImageZone from './_component/_imageZone/ImageZone';
import { getSinglePost } from '@/app/(afterLogin)/[username]/status/[id]/_hooks/getSinglePost';
import { getComments } from '@/app/(afterLogin)/[username]/status/[id]/_hooks/getComments';

type PageModalProps = {
    params: { id: string };
}

const PageModal = async ({ params }: PageModalProps) => {

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
        <div className={style.container}>
            <HydrationBoundary state={dehydratedState}>
                <PhotoModalCloseButton />
                <ImageZone id={id}/>
                <div className={style.commentZone}>
                    <SinglePost id={id} noImage />
                    <CommentForm id={id}/>
                    <Comments id={id} />
                </div>
            </HydrationBoundary>
        </div>
    )
}

export default PageModal