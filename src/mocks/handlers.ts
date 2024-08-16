import { faker } from '@faker-js/faker';
import { http, HttpResponse } from 'msw';

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
]

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

    http.get('/api/postRecommends', ({ request }) => {
        return HttpResponse.json(
            [
                {
                    postId: 1,
                    User: User[0],
                    content: `${1} Z.com is so marvelous. I'm gonna buy that.`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: 2,
                    User: User[0],
                    content: `${2} Z.com is so marvelous. I'm gonna buy that.`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: 3,
                    User: User[0],
                    content: `${3} Z.com is so marvelous. I'm gonna buy that.`,
                    Images: [],
                    createdAt: generateDate(),
                },
                {
                    postId: 4,
                    User: User[0],
                    content: `${4} Z.com is so marvelous. I'm gonna buy that.`,
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
                    content: `${5} Z.com is so marvelous. I'm gonna buy that.`,
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

    http.get('/api/followingPosts', ({ request }) => {
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
        return HttpResponse.json(
            User[1]
        );
    }),

    http.get('/api/users/:userId/posts/:postId', ({ request, params }) => {
        const { userId, postId } = params;
        return HttpResponse.json(
            {
                postId: 6,
                User: User[0],
                content: `${1} ${userId}의 게시글과 ${postId}의 내용`,
                Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                createdAt: generateDate(),
            },
        );
    }),

    http.get('/api/users/:userId/posts/:postId/comments', ({ request, params }) => {
        const { userId, postId } = params;

        return HttpResponse.json(
            [
                {
                    postId: 1,
                    User: User[0],
                    content: `${1} ${userId}의 게시글과 ${postId}의 답글`,
                    Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
                    createdAt: generateDate(),
                },
                {
                    postId: 2,
                    User: User[0],
                    content: `${2} ${userId}의 게시글과 ${postId}의 답글`,
                    Images: [
                        {imageId: 1, link: faker.image.urlLoremFlickr()},
                        {imageId: 2, link: faker.image.urlLoremFlickr()},
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: 3,
                    User: User[0],
                    content: `${3} ${userId}의 게시글과 ${postId}의 답글`,
                    Images: [],
                    createdAt: generateDate(),
                },
                {
                    postId: 4,
                    User: User[0],
                    content: `${4} ${userId}의 게시글과 ${postId}의 답글`,
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
                    content: `${5} ${userId}의 게시글과 ${postId}의 답글`,
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
                {tagId: 0, title: '영삼이', count: 142},
                {tagId: 1, title: '일삼이', count: 1242},
                {tagId: 2, title: '이삼이', count: 1409},
                {tagId: 3, title: '삼삼이', count: 7239},
                {tagId: 4, title: '사삼이', count: 243},
                {tagId: 5, title: '오삼이', count: 533},
                {tagId: 6, title: '육삼이', count: 2039},
                {tagId: 7, title: '칠삼이', count: 885},
                {tagId: 8, title: '팔삼이', count: 609},
                {tagId: 9, title: '구삼이', count: 3205},
            ]
        )
    })
];