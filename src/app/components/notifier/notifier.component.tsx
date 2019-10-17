import React from 'react';
import NotifierProps, { NotifierMessage } from '../@prop-types/notifier.props';
import defaultProps from './notifier.default-props';
import { Toast } from 'react-bootstrap';

const Notifier = (props: NotifierProps) => {
  const { messages, show, close: cancel } = props;

  return (
    <div>
      {messages.map((notifierMessage: NotifierMessage, index: number) => {
        return (
          <Toast>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body style={{ margin: '5px' }}>
              <div key={index} className="row">
                <span className="col-md-4">{notifierMessage.message.content}</span>
                <button
                  className="btn btn-primary col-md-4"
                  onClick={() => {
                    show && show(notifierMessage.roomId);
                  }}
                >
                  Display
                </button>
                <button
                  className="btn btn-secondary col-md-4"
                  onClick={() => {
                    cancel && cancel();
                  }}
                >
                  Close
                </button>
              </div>
            </Toast.Body>
          </Toast>
        );
      })}
    </div>
  );
};

Notifier.defaultProps = defaultProps;

export default Notifier;
