export const getFollowingPosts = async () => {
    const res = await fetch('http://localhost:9090/api/followingPosts', {
        next: {
            tags: ['posts', 'followings'],
        },
        // 캐싱 안하기 : 일정 기간동안 같은 데이터 주기
        cache: 'no-store'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }

    return res.json();
};