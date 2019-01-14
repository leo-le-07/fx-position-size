// @flow

import React from 'react';
import Sound from 'react-sound';
// $FlowFixMe
import defaultSound from './ding.wav';

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
