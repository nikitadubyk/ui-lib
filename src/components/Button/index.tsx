import React from 'react';

import * as Styles from './styles';
import { ButtonProps } from './types';

export const Button = ({ text, padding = '8px 16px' }: ButtonProps) => {
  return <Styles.Button padding={padding}>{text}</Styles.Button>;
};
