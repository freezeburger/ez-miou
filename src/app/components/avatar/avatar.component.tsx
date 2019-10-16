import React from 'react';
import AvatarProps from '../@prop-types/avatar.props';
import './avatar.scss';

interface IState {
  loaded: boolean;
}
class Avatar extends React.Component<AvatarProps, IState> {
  static defaultProps: AvatarProps = {
    size: 50,
    rounded: true,
    src: 'https://picsum.photos/50'
  };
  constructor(props: AvatarProps) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  //LifeCycle
  componentDidMount() {}

  componentWillUnmount() {}

  handleImageLoaded = () => {
    this.setState({
      loaded: true
    });
  };

  render() {
    const { size, src, rounded } = this.props;
    return (
      <div
        className={`avatar ${rounded ? 'avatar-rounded' : ''} ${rounded ? 'loaded' : 'loading'}`}
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
