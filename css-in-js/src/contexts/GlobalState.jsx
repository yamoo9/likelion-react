import PropTypes from 'prop-types';
import { useState, createContext, useMemo, useContext } from 'react';
import { getPathFromBaseUrl as baseURL } from '@/utils';

// 컨텍스트 객체 생성
const GlobalStateContext = createContext();

GlobalStateContext.displayName = 'GlobalStateContext';

// 생성된 컨텍스트는 컨텍스트.프로바이더 컴포넌트를 사용할 수 있게 한다.
// 컨텍스트.프로바이더 컴포넌트를 감싸는 컴포넌트를 작성할 수 있다.

// [상태 값을 공급하기]

export const GlobalStateProvider = ({ children }) => {
  const [logoLabel, setLogoLabel] = useState(
    'Stateful Component & Form Design'
  );

  const [navList, setNavList] = useState([
    { id: 'home', to: baseURL(), text: '홈', active: false },
    { id: 'signup', to: baseURL('signup'), text: '회원가입', active: true },
    { id: 'signin', to: baseURL('signin'), text: '로그인', active: false },
    { id: 'todos', to: baseURL('todos'), text: '할 일 목록', active: false },
  ]);

  const globalStateValue = useMemo(
    () => ({
      logoLabel,
      updateLogoLabel: setLogoLabel,
      navList,
      updateNavList: setNavList,
    }),
    [logoLabel, navList]
  );

  return (
    <GlobalStateContext.Provider value={globalStateValue}>
      {children}
    </GlobalStateContext.Provider>
  );
};

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// useContext 훅을 사용하면 컨텍스트의 값을 꺼낼 수 있다.
// const value = useContext(Context)

// 훅의 규칙
// 1. React 훅은 어디서만 사용이 가능할까요?
//    - 함수 컴포넌트의 1 Depth 안에서만
//    - 커스텀 훅 안에서만
// 2. 훅의 이름은 항상 'use*'로 시작합니다.

// [상태 값을 꺼내기]

export function useGlobalState() {
  const globalState = useContext(GlobalStateContext);

  if (!globalState) {
    throw new ReferenceError(
      'useGlobalState 훅은 GlobalState 컨텍스트 내부에서만 호출해야 합니다.'
    );
  }

  return globalState;
}
