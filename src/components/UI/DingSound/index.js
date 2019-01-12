// @flow

import React from 'react';
import Sound from 'react-sound';
import soundFile from '../../../assets/ding.wav';

export const STATUS = {
  PLAY: Sound.status.PLAYING,
  STOP: Sound.status.STOPPED,
};

const DingSound = ({ status }: { status: string }) => (
  <Sound url={soundFile} playStatus={status} />
);

export default DingSound;
