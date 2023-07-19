import React from 'react'
import s from './FriendMessage.module.css'
import {MessagePropsType} from '../message/Message';

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndTime}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={props.message.user.avatar}
                    alt="avatar"
                />
                <div
                    id={'hw1-friend-time-' + props.message.id}
                    className={s.friendTime}
                >
                    {props.message.message.time}
                </div>
            </div>
            <div className={s.friendTriangle}></div>
            <div className={s.friendNameAndText}>
                <div
                    id={'hw1-friend-name-' + props.message.id}
                    className={s.friendName}
                >
                    {props.message.user.name}
                </div>
                <div className={s.friendText}>
                    {props.message.message.text}
                </div>
            </div>

        </div>
    )
}

export default FriendMessage
