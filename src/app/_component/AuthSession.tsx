"use client";

import { SessionProvider } from 'next-auth/react';

type AuthSessionProps = {
    children: React.ReactNode,
}

const AuthSession = ({ children }: AuthSessionProps) => {
  return <SessionProvider>{ children }</SessionProvider>
}

export default AuthSession