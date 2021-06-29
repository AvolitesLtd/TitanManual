import React, {ReactNode} from 'react';
import YouTube from 'react-youtube'

type VideoProps = {
  videoId: string,
  title: string
}

interface IState {
  open: boolean;
  player: any|null;
}

class Video extends React.Component<VideoProps, IState> {
  constructor(props: VideoProps) {
    super(props);

    this.state = {
      open: false,
      player: null
    };
  }

  toggle() {
    if (this.state.open) {
      this.state.player.pauseVideo();
    }

    this.setState((previousState, props) => ({
      open: !previousState.open,
    }));
  }

  handleReady(event) {
    this.setState({ player: event.target });
  }

  render() {
    let videoClass = "video";
    if (this.state.open) {
      videoClass += " expand";
    }

    return <div className={videoClass} onClick={() => this.toggle()}>
      <div className="video-title">
        {this.props.title}
      </div>
      <YouTube className="iframe" videoId={this.props.videoId} onReady={(e) => this.handleReady(e)}/>
    </div>
  };
};


export default Video;