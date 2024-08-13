"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/Main";
import { useSession } from "next-auth/react";

const Login = () => {
    const router = useRouter();
    const { data: session } = useSession();

    if (session?.user) {
        router.replace('/home');
        return null;
    }

    router.replace('/i/flow/login');
    return (
        <Main />
    );
}

export default Login;

// router.push나 router.replace 둘 다
// localhost:3000/login -> localhost:3000/i/flow/login

// 하지만 둘의 차이점은 뒤로 가기 했을 때
// push인 경우는 localhost:3000/login으로 가지만
// replace의 경우 localhost:3000으로 간다.

// 즉 디테일하게 경로 설명은
// router.push
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
// router.place
// localhost:3000 -> localhost:3000/i/flow/login