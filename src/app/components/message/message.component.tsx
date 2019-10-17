import React from 'react';
import MessageProps from '../@prop-types/message.props';
import ReactMarkdown from 'react-markdown';
import './message.scss';
import Avatar from '../avatar/avatar.component';

export default class Message extends React.Component<MessageProps, any> {
  render() {
    return (
      <div className="message">
        <div className="avatar-container">
          <Avatar />
        </div>
        <div className="wrapper">
          <div className="message-info">
            <span className="user-name">John Doe</span>
            <span className="date">1 minute ago</span>
          </div>
          <div className="message-text">
            <ReactMarkdown source={this.props.content} />
          </div>
        </div>
      </div>
    );
  }
}
