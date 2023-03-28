import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});

DefaultButton.args = {
  text: 'Main button',
};
