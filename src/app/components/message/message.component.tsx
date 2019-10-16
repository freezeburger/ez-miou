import React from 'react';
import MessageProps from '../@prop-types/message.props';
import ReactMarkdown from 'react-markdown';

export default class Message extends React.Component<MessageProps, any> {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    return (
      <div className="message">
        <ReactMarkdown source={this.props.content} />
      </div>
    );
  }
}
