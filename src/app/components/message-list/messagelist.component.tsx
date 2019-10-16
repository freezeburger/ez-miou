import React from 'react';
import MessageListProps from '../@prop-types/message-list.props';

const MessageList = (props:MessageListProps) => {
    console.log(props); //readonly
    return <div>Message List of a Room</div>
} 

export default MessageList;