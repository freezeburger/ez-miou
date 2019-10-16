import React from 'react';

interface IProps {
  /**
   * Size of the avatar
   * Same width and height
   */
  size?: number;
  /**
   * Image url used by the avatar
   */
  src?: string;
}

interface IState {
  size: number;
  src: string;
}
export default class Avatar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      size: props.size || 50,
      src: props.src || 'https://picsum.photos/50'
    };
  }

  //LifeCycle
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div
        className="avatar"
        style={{
          width: this.state.size + 'px',
          height: this.state.size + 'px'
        }}
      >
        <img src={this.state.src} alt="avatar" />
      </div>
    );
  }
}
