import { faker } from '@faker-js/faker'
import style from './chatRoom.module.css';
import Link from 'next/link';
import BackButton from '../../_component/_backButton/BackButton';
import cx from 'classnames';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';


dayjs.locale('ko');
dayjs.extend(relativeTime);

const ChatRoom = () => {
    const user = {
        id: 'hero',
        nickname: 'anonymous',
        image: faker.image.avatar()
    };

    const messages = [
        { messageId: 1, id: 'j2an777', content: '안녕하세요.', createdAt: new Date() },
        { messageId: 2, id: 'hero', content: '안녕히가세요.', createdAt: new Date() },
    ]

    return (
        <main className={style.main}>
            <div className={style.header}>
                <BackButton />
                <div><h2>{user.nickname}</h2></div>
            </div>
            <Link href={user.nickname} className={style.userInfo}>
                <img src={user.image} alt={user.id} />
                <div><b>{user.id}</b></div>
                <div>@{user.id}</div>
            </Link>
            <div className={style.list}>
                {messages.map((m) => {
                    if (m.id === 'j2an777') {
                        return (
                            <div
                                key={m.messageId} 
                                className={cx(style.message, style.myMessage)}
                                >
                                <div className={style.content}>{m.content}</div>
                                <div className={style.date}>{dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}</div>
                            </div>
                        );
                    }
                    return (
                        <div 
                            key={m.messageId} 
                            className={cx(style.message, style.yourMessage)}
                            >
                            <div className={style.content}>{m.content}</div>
                            <div className={style.date}>{dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}</div>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default ChatRoom