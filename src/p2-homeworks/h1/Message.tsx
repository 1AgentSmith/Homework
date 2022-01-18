import React from 'react'
import s from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={s.message}>
            <div className={s.userImage}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.chatBox}>
                <div className={s.userName}><span>{props.name}</span></div>
                <div className={s.msgTimeBox}>
                    <div className={s.textMessage}><span>{props.message}</span></div>
                    <div className={s.messageTime}><span>{props.time}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Message
