type GetPostRecommendsProps = {
    pageParam: number;
}

export const getPostRecommends = async ({ pageParam }: GetPostRecommendsProps) => {
    const res = await fetch(`http://localhost:9090/api/postRecommends?cursor=${pageParam}`, {
        next: {
            tags: ['posts', 'recommends'],
        },
        // 캐싱 안하기 : 일정 기간동안 같은 데이터 주기
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }

    return res.json();
};