import { http, HttpResponse } from 'msw';

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
        // return HttpResponse.text(JSON.stringify('user_exists'), {
        //     status: 403,
        // })
        return HttpResponse.text(JSON.stringify('ok'), {
            headers: {
                'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0'
            }
        })
    })
];