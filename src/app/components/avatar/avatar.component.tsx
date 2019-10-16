import React from 'react';
import AvatarProps from '../@prop-types/avatar.props';
import "./avatar.scss";

interface IState {
  size: number;
  src: string;
}
class Avatar extends React.Component<AvatarProps, IState> {
  constructor(props: AvatarProps) {
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

export default Avatar;
