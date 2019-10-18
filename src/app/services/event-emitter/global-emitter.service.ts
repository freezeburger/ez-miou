/**
 * Global Event Emitter Class
 */
class GlobalEmitter {
  private eventsListener: { [key: string]: Array<Function> } = {};

  emit(eventName: string, payload: any): void {
    this.eventsListener[eventName] &&
      this.eventsListener[eventName].map(callback => {
        setTimeout(() => {
          callback(payload);
        }, 0);
      });
  }

  subscribe(eventName: string, callback: Function): void {
    // On garde le typeof car au runtime le typage disparaît
    if (typeof callback !== 'function') {
      throw Error('Callback is not a function');
    }

    if (this.eventsListener[eventName]) {
      if (!this.eventsListener[eventName].includes(callback)) {
        this.eventsListener[eventName].push(callback);
      }
      return;
    }

    this.eventsListener[eventName] = [callback];
  }
}

const globalEmitter = new GlobalEmitter();

export default globalEmitter;
