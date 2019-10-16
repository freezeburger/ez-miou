import React from 'react';
import MessageProps from '../@prop-types/message.props';

export default class Message extends React.Component<MessageProps, any> {
  constructor(props: MessageProps) {
    super(props);
  }

  //LifeCycle
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="message">
        <span>{this.props.content}</span>
      </div>
    );
  }
}
