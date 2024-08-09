import Room from './_component/Room';
import style from './messages.module.css';

const Messages = () => {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </main>
  )
}

export default Messages