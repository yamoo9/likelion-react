import { Button } from './Button';

// 메타 정보 객체
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    label: '회원가입',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
  },
};

export const Secondary = {
  args: {
    // label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    // label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    // label: 'Button',
  },
};
