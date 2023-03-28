import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { GlobalStyles } from '../src/styles/globalStyles';

addDecorator((story) => (
  <div>
    <GlobalStyles /> <MemoryRouter>{story()}</MemoryRouter>
  </div>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
      color: /(background|color)$/i,
    },
  },
};
