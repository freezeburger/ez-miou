import React from 'react';
import NotifierProps, { NotifierMessage } from '../@prop-types/notifier.props';
import defaultProps from './notifier.default-props';

class Notifier extends React.Component<NotifierProps> {

  public static defaultProps: Partial<NotifierProps> = {};

  /** Can we use Browser notification ? */
  private useBrowserNotification = false;

  componentDidMount() {
    if (!window.Notification) {
      console.log('Ce navigateur ne supporte pas les notifications desktop');
      return;
    }

    if (Notification.permission === 'granted') {
      this.useBrowserNotification = true;
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(permission => {
        if (permission === 'granted') {
          this.useBrowserNotification = true;
        }
      });
    }
  }

  /**
   * Display a browser notification
   */
  private displayToasterMessage = (message: string): void => {
    // TODO: to implement
    console.log('Toast');
  };

  /**
   * Display a browser notification
   */
  private displayBrowserMessage = (message: string): void => {
    new Notification(message);
  };

  /**
   * Display a Browser Notification
   */
  public send = (notifierMessage: NotifierMessage): void => {
    if (this.useBrowserNotification) {
      this.displayBrowserMessage(notifierMessage.messageDetail.message);
    } else {
      this.displayToasterMessage(notifierMessage.messageDetail.message);
    }
  };

  render = () => {
    const {messages, accept, cancel} = this.props;
    return (
      <div>
        {messages.map((notifierMessage: NotifierMessage, index: number) => {
          return (
            <div key={index} className="row">
              <span className="col-md-4">
                {notifierMessage.messageDetail.message}
              </span>
              <button className="btn btn-primary col-md-4"
                onClick={() => {
                  this.send(notifierMessage);
                  accept && accept(notifierMessage.room.id);
                }}
              >
                Display
              </button> 
              <button className="btn btn-secondary col-md-4"
                onClick={ () => { cancel && cancel(notifierMessage.room.id); } }
              >
                Ignore
              </button>
            </div>
          );
        })}
      </div>
    );
  };
}

Notifier.defaultProps = defaultProps;

export default Notifier;
