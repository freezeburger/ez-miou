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
    loaded: false
  };

  constructor(props: AvatarProps) {
    super(props);
/* 
    this.handleImageLoaded = Avatar.prototype.handleImageLoaded.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this); */
  }

  handleImageLoaded = ()=>{
    this.setState({
      loaded: true
    });
  };

  render() {
    const { size, src, rounded } = this.props;
    var classes = ['avatar', { 'avatar-rounded': rounded, loaded: this.state.loaded }];
    return (
      <div
        className={classNames(classes)}
        style={{
          width: size + 'px',
          height: size + 'px'
        }}
      >
        <img src={src} alt="avatar" onLoad={this.handleImageLoaded} />
        <div className="avatar-img" style={{ backgroundImage: `url(${src})` }}></div>
      </div>
    );
  }
}

export default Avatar;
