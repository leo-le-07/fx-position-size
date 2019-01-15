// @flow

import React from 'react';
import Sound from 'react-sound';
// $FlowFixMe
import defaultSound from 'assets/sounds/noti_5s.mp3';

export const STATUS = {
  PLAY: Sound.status.PLAYING,
  STOP: Sound.status.STOPPED,
};

const UIDingSound = ({
  status,
  url = defaultSound,
}: {
  status: string,
  url?: string
}) => {
  console.log('Make sound');
  return <Sound url={url} playStatus={status} />;
};

export default UIDingSound;
