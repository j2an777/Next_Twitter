export { auth as middleware } from './auth';


export const config = {
    // 로그인을 해야지만 접근 가능한 페이지들 모음
    matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
}