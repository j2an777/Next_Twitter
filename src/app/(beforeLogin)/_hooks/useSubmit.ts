"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";


export const useSubmit = async (prevState: any, formData: FormData) => {

  // id 입력값이 없거나 공백으로 입력한 경우
  if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
    return { message: 'no_id' };
  }

  if (!formData.get('name') || !(formData.get('name') as string)?.trim()) {
    return { message: 'no_name' };
  }

  if (!formData.get('password') || !(formData.get('password') as string)?.trim()) {
    return { message: 'no_password' };
  }

  if (!formData.get('image')) {
    return { message: 'no_image' };
  }

  let shouldRedirect = false;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
      method: 'POST',
      body: formData,
      credentials: 'include',
    })
    console.log(response.status);

    if (response.status === 403) {
      return { message: 'user_exists' };
    }
    
    console.log(await response.json());
    shouldRedirect = true;
    await signIn("credentials", {
      username: formData.get('id'),
      password: formData.get('password'),
      redirect: false,
    })
  } catch(err) {
    console.error('Error:', err);
    return;
  }

  if (shouldRedirect) {
      redirect('/home'); // try, catch문에서 사용 x
  }

  return { message: null };
}