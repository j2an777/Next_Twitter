import { faker } from '@faker-js/faker';
import { http, HttpResponse, StrictResponse } from 'msw';

const generateDate = () => {
    const lastWeek = new Date(Date.now());
    lastWeek.setDate(lastWeek.getDate() - 7);

    return faker.date.between({
        from: lastWeek,
        to: new Date()
    });
};

const User = [
    {id: 'elonmusk', nickname: 'Elon Musk', image:'/yRsRRjGO.jpg'},
    {id: 'zeroch0', nickname: '제로초', image:'/5Udwvqim.jpg'},
    {id: 'j2an777', nickname: '즤니', image:faker.image.urlLoremFlickr()},
];

const delay = (ms: number) => new Promise ((res) => {
    setTimeout(res, ms);
});

export const handlers = [
    http.post('/api/login', () => {
        return HttpResponse.json({
            userId: 1,
            nickname: 'j2an777',
            id: 'j2an777',
            image: '/5Udwvqim.jpg'
        }, {
            headers: {
                'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
            }
        })
    }),

    http.post('/api/logout', () => {
        return new HttpResponse(null, {
            headers: {
                'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
            }
        })
    }),

    http.post('/api/users', async () => {
        console.log('회원가입');
        // 상태코드 검사
        // return HttpResponse.text(JSON.stringify('user_exists'), {
        //     status: 403,
        // })
        return HttpResponse.text(JSON.stringify('ok'), {
            headers: {
                'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0'
            }
        })
    }),

    http.get('/api/postRecommends', async ({ request }) => {
        await delay(2000);
        const url = new URL(request.url);
        const cursor = parseInt(url.searchParams.get('cursor') as string) || 0;

        return HttpResponse.json(
            [
                {
                    postId: cursor + 1,
                    User: User[0],
                    content: `${cursor + 1} Z.com is so marvelous. I'm gonna buy that.`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 2,
                    User: User[0],
                    content: `${cursor + 2} Z.com is so marvelous. I'm gonna buy that.`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 3,
                    User: User[0],
                    content: `${cursor + 3} Z.com is so marvelous. I'm gonna buy that.`,
                    Images: [],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 4,
                    User: User[0],
                    content: `${cursor + 4} Z.com is so marvelous. I'm gonna buy that.`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                        {imageId: 3, link: faker.image.urlLoremFlickr()},
                        {imageId: 4, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 5,
                    User: User[0],
                    content: `${cursor + 5} Z.com is so marvelous. I'm gonna buy that.`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                        {imageId: 3, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
            ]
        )
    }),

    http.get('/api/followingPosts', async ({ request }) => {
        await delay(2000);
        return HttpResponse.json(
            [
                {
                    postId: 1,
                    User: User[0],
                    content: `Follow follow me`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: 2,
                    User: User[0],
                    content: `Follow follow me`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: 3,
                    User: User[0],
                    content: `Follow follow me`,
                    Images: [],
                    createdAt: generateDate(),
                },
                {
                    postId: 4,
                    User: User[0],
                    content: `Follow follow me`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                        {imageId: 3, link: faker.image.urlLoremFlickr()},
                        {imageId: 4, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: 5,
                    User: User[0],
                    content: `Follow follow me`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                        {imageId: 3, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
            ]
        )
    }),

    http.get('/api/search/:tag', ({ request, params }) => {
        const { tag } = params;

        return HttpResponse.json(
            [
                {
                    postId: 1,
                    User: User[0],
                    content: `${1} 검색결과 ${tag}`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: 2,
                    User: User[0],
                    content: `${2} 검색결과 ${tag}`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: 3,
                    User: User[0],
                    content: `${3} 검색결과 ${tag}`,
                    Images: [],
                    createdAt: generateDate(),
                },
                {
                    postId: 4,
                    User: User[0],
                    content: `${4} 검색결과 ${tag}`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                        {imageId: 3, link: faker.image.urlLoremFlickr()},
                        {imageId: 4, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: 5,
                    User: User[0],
                    content: `${5} 검색결과 ${tag}`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                        {imageId: 3, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
            ]
        )
    }),

    http.get('/api/users/:userId/posts', ({ request, params }) => {
        const { userId } = params;

        return HttpResponse.json(
            [
                {
                    postId: 1,
                    User: User[0],
                    content: `${1} ${userId}의 게시글`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: 2,
                    User: User[0],
                    content: `${2} ${userId}의 게시글`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: 3,
                    User: User[0],
                    content: `${3} ${userId}의 게시글`,
                    Images: [],
                    createdAt: generateDate(),
                },
                {
                    postId: 4,
                    User: User[0],
                    content: `${4} ${userId}의 게시글`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                        {imageId: 3, link: faker.image.urlLoremFlickr()},
                        {imageId: 4, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: 5,
                    User: User[0],
                    content: `${5} ${userId}의 게시글`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                        {imageId: 3, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
            ]
        )
    }),

    http.get('/api/users/:userId', ({ request, params }) => {
        const { userId } = params;
        const found = User.find((v) => v.id === userId);

        if (found) {
            return HttpResponse.json(
                found
            );
        }

        return HttpResponse.json({ message: 'no_such_user'}, {
            status: 404,
        });
    }),

    http.get('/api/posts/:postId', ({ request, params }) => {
        const { postId } = params;

        if (parseInt(postId as string) > 10) {
            return HttpResponse.json({ message: 'no_such_post' }, {
                status: 404
            })
        }

        return HttpResponse.json(
            {
                postId: 6,
                User: User[0],
                content: `${1} 게시글 아이디 ${postId}의 내용`,
                Images: [
                    {imageId: 1, link: faker.image.urlLoremFlickr()},
                    {imageId: 1, link: faker.image.urlLoremFlickr()},
                    {imageId: 1, link: faker.image.urlLoremFlickr()},
                ],
                createdAt: generateDate(),
            },
        );
    }),

    http.get('/api/posts/:postId/comments', ({ request, params }) => {
        const { postId } = params;

        return HttpResponse.json(
            [
                {
                    postId: 1,
                    User: User[0],
                    content: `${1}의 게시글과 ${postId}의 답글`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: 2,
                    User: User[0],
                    content: `${2}의 게시글과 ${postId}의 답글`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: 3,
                    User: User[0],
                    content: `${3}의 게시글과 ${postId}의 답글`,
                    Images: [],
                    createdAt: generateDate(),
                },
                {
                    postId: 4,
                    User: User[0],
                    content: `${4}의 게시글과 ${postId}의 답글`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                        {imageId: 3, link: faker.image.urlLoremFlickr()},
                        {imageId: 4, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: 5,
                    User: User[0],
                    content: `${5}의 게시글과 ${postId}의 답글`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                        {imageId: 3, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
            ]
        )
    }),

    http.get('/api/followRecommends', ({ request }) => {
        return HttpResponse.json(User);
    }),

    http.get('/api/trends', ({ request }) => {
        return HttpResponse.json(
            [
                {tagId: 0, title: '영삼이', count: 1042},
                {tagId: 1, title: '일삼이', count: 1242},
                {tagId: 2, title: '이삼이', count: 1409},
                {tagId: 3, title: '삼삼이', count: 7239},
                {tagId: 4, title: '사삼이', count: 2433},
                {tagId: 5, title: '오삼이', count: 5331},
                {tagId: 6, title: '육삼이', count: 2039},
                {tagId: 7, title: '칠삼이', count: 1885},
                {tagId: 8, title: '팔삼이', count: 1609},
                {tagId: 9, title: '구삼이', count: 3205},
            ]
        )
    }),
];