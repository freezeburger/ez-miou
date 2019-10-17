import React from 'react';
import MessageListProps from '../@prop-types/message-list.props';
import defaultProps from './messagelist.default-props';
import AppMessage from '../../services/@types/app-message';
import './message-list.scss';

const Message = (props:AppMessage) => (
    <li className="list-group-item message-item">
        <div className="msg-sender">{ props.sender.name }</div>
        <div className="msg-date">{ props.date }</div>
        <div className="msg-message">{ props.content.message }</div>
    </li>
)

const MessageList = (props:MessageListProps) => {
    return (
        <ul className="list-group message-list">
        { 
        props.messages.map( (msg,i) =>  <Message key={i} {...msg}/>)
        }
        </ul>
     )
}



MessageList.defaultProps = defaultProps;

export default MessageList;