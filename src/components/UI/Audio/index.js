import React from 'react';
import defaultSound from 'assets/sounds/noti_5s.mp3';

class UIAudio extends React.Component {
  componentDidMount() {
    this.player.play();
  }

  render() {
    console.log('Make sound');
    return (
      <audio
        ref={player => {
          this.player = player;
        }}
      >
        <source src={defaultSound} type="audio/mpeg" />
      </audio>
    );
  }
}

export default UIAudio;
