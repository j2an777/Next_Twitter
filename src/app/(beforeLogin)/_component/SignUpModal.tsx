"use client";

import style from './signup.module.css';
import BackButton from "./_backButton/BackButton";
import { useSubmit } from '../_hooks/useSubmit';
import { useFormState, useFormStatus } from 'react-dom';
import { showMessage } from '../_hooks/showMessage';

const SignUpModal = () => {
  const [state, formAction] = useFormState(useSubmit, { message: null });
  const { pending } = useFormStatus();
    
  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <BackButton />
            <div>계정을 생성하세요.</div>
          </div>
          <form action={formAction}>
            <div className={style.modalBody}>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="id">아이디</label>
                <input id="id" name="id" className={style.input} type="text" placeholder="" required
                       
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="name">닉네임</label>
                <input id="name" name="name" className={style.input} type="text" placeholder="" required
                       
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="password">비밀번호</label>
                <input id="password" name="password" className={style.input} type="password" placeholder="" required
                       
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="image">프로필</label>
                <input id="image" name="image" className={style.input} type="file" accept="image/*" required
                       
                />
              </div>
            </div>
            <div className={style.modalFooter}>
              <button type="submit" className={style.actionButton} disabled={pending}>가입하기</button>
              <div className={style.error}>{showMessage(state?.message)}</div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUpModal;