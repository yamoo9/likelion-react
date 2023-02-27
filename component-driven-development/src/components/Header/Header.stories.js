import { Header } from './Header';
import { getPathFromBaseUrl as baseURL } from '@/utils';

export default {
  title: 'Lecture/Header',
  component: Header,
  tags: ['autodocs'],
  args: Header.defaultProps,
};

export const WithoutNavigation = {};

export const WithinNavigation = {
  args: {
    navList: [
      { id: 'home', to: baseURL(), text: '홈', active: false },
      { id: 'signup', to: baseURL('signup'), text: '회원가입', active: true },
      { id: 'signin', to: baseURL('signin'), text: '로그인', active: false },
      { id: 'todos', to: baseURL('todos'), text: '할 일 목록', active: false },
    ],
  },
};

export const WithLogoLabelAndWithoutNavigation = {
  args: {
    logoLabel: 'Stateful Component & Form Design',
  },
};

export const WithLogoLabelAndWithinNavigation = {
  args: {
    logoLabel: 'Stateful Component & Form Design',
    navList: WithinNavigation.args.navList,
  },
};
