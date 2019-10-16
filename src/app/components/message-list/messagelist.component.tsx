import React from 'react';
import MessageListProps from '../@prop-types/message-list.props';
import defaultProps from './messagelist.default-props';
import AppMessage from '../../services/@types/app-message';
import './message-list.scss';

const MessageList = (props:MessageListProps) => {
    //console.log(props);
    let content:any = [];
    props.messages.forEach(function(value:AppMessage) {
        content.push(
            <li className="list-group-item message-item">
                <div className="msg-sender">{ value.sender.name }</div>
                <div className="msg-date">{ value.date }</div>
                <div className="msg-message">{ value.content.message }</div>
            </li>
        );
    });

    return (<ul className="list-group message-list">{ content }</ul>)
}

MessageList.defaultProps = defaultProps;

export default MessageList;