import React from 'react';

interface IProps {
  size: number;
  src: string;
}

interface IState {
  size: number;
  src: string;
}
export default class Avatar extends React.Component<IProps, IState> {
  constructor(props: IProps = { size: 50, src: 'https://picsum.photos/50' }) {
    super(props);

    this.state = {
      size: props.size,
      src: props.src
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
