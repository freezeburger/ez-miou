import React from 'react';
import AvatarProps from '../@prop-types/avatar.props';
import './avatar.scss';
import classNames from 'classnames';

interface IState {
  loaded: boolean;
}
class Avatar extends React.Component<AvatarProps, IState> {
  static defaultProps: AvatarProps = {
    size: 50,
    rounded: true,
    src: 'https://picsum.photos/50'
  };

  state = {
    loaded: false,
    toto: 123
  };

  constructor(props: AvatarProps) {
    super(props);
    /* 
    this.handleImageLoaded = Avatar.prototype.handleImageLoaded.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this); */
  }

  handleImageLoaded = (): void => {
    this.setState((prevState, props) => ({ loaded: true }));
  };

  render() {
    const { size, src, rounded } = this.props;
    const { loaded } = this.state;
    const styles = {
      width: size + 'px',
      height: size + 'px'
    }

    var classes = ['avatar', { 'avatar-rounded': rounded, loaded }];
    return (
      <div
        className={classNames(classes)}
        style={styles}
      >
        <img src={src} alt="avatar" onLoad={this.handleImageLoaded} />
        <div
          className="avatar-img"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    );
  }
}

export default Avatar;
