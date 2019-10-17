import React from 'react';
import MessageListProps from '../@prop-types/message-list.props';
import defaultProps from './messagelist.default-props';
import AppMessage from '../../services/@types/app-message';
import './message-list.scss';
import Message from '../message/message.component';

const MessageList = (props: MessageListProps) => {
  return (
    <ul className="list-group message-list">
      {props.messages.map((msg, i) => (
        <Message content={msg.content.message} date={msg.date} key={i} />
      ))}
    </ul>
  );
};

MessageList.defaultProps = defaultProps;

export default MessageList;
