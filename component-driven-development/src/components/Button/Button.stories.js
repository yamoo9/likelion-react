import { Button } from './Button';

export default {
  title: 'Lecture/Button',
  component: Button,
  tags: ['autodocs'],
  args: { ...Button.defaultProps, children: '회원가입' },
};

export const Primary = {};

export const Secondary = {
  args: {
    secondary: true,
  },
};

export const PrimaryDisabled = {
  args: {
    disabled: true,
  },
};

// SecondaryDisabled
export const SecondaryDisabled = {
  args: {
    disabled: true,
    ...Secondary.args,
  },
};
