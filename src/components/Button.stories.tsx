import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from '../types/Button';

const meta: Meta<ButtonProps> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        loading: { control: 'boolean' },
        variant: { control: 'radio', options: ['primary', 'secondary'] },
    },
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
};

export const Loading: Story = {
    args: {
        variant: 'primary',
        loading: true,
        children: 'Loading...',
    },
};