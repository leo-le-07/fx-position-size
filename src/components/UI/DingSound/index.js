// @flow

import React from 'react';
import Sound from 'react-sound';
import defaultSound from '../../../assets/ding.wav';

export const STATUS = {
  PLAY: Sound.status.PLAYING,
  STOP: Sound.status.STOPPED,
};

const DingSound = ({
  status,
  url = defaultSound,
}: {
  status: string,
  url?: string
}) => <Sound url={url} playStatus={status} />;

export default DingSound;
