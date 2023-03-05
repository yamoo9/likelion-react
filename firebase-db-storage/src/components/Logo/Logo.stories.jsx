import { Logo } from './Logo';

export default {
  title: 'Lecture/Logo',
  component: Logo,
  tags: ['autodocs'],
  args: Logo.defaultProps,
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
};

export const Base = {
  args: {},
};

Base.storyName = '기본 로고';

export const Rotation90 = {
  args: {
    rotation: 90,
  },
};

Rotation90.storyName = '회전 90도 로고'
