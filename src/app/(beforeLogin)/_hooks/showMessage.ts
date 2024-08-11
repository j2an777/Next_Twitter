
export const showMessage = (message: string | null | undefined) => {
    if (message === 'no_id') return '아이디를 입력하세요.';
    if (message === 'no_name') return '닉네임을 입력하세요.';
    if (message === 'no_password') return '비밀번호 입력하세요.';
    if (message === 'no_image') return '이미지가 없습니다.';
    if (message === 'user_exists') return '이미 사용 중인 아이디입니다.';

    return '';
}