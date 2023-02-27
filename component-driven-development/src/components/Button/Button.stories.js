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

export const SecondaryDisabled = {
  args: {
    disabled: true,
    ...Secondary.args,
  },
};

export const PrimaryClickable = {
  args: {
    onClick() {
      console.log('회원가입을 요청합니다.');
    },
  },
};

export const PrimaryHoverable = {
  args: {
    onMouseEnter() {
      console.log('Mouse Enter');
    },
    onMouseLeave() {
      console.log('Mouse Leave');
    },
  },
};
