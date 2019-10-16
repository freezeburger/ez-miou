import React from 'react';
import MessageListProps from '../@prop-types/message-list.props';
import defaultProps from './messagelist.default-props';
import AppMessage from '../../services/@types/app-message';

const MessageList = (props:MessageListProps) => {
    console.log(props); //readonly
    let content:any = [];
    props.messages.forEach(function(value:AppMessage) {
        content.push(<div className="message-item">{ value.content.message }</div>);
    });

    return (<div className="message-list">{ content }</div>)
}

MessageList.defaultProps = defaultProps;

export default MessageList;