// ---------------------------------------------------------------------------------
// ✅ [학습 계획] 2023. 3. 3
// ---------------------------------------------------------------------------------
// - [x] GitHub 학습 저장소 자료를 내려 받으세요. (pull 또는 degit 복사)
// - [x] 지난 시간 "상태 끌어올리기" 전략 그에 따른 Props 드릴링 이슈에 대해 이야기 했습니다 (리마인드)
// - [x] Props 드릴링 이슈 해결을 위해 React 컨텍스트(Context) API 사용법을 학습합니다.
// - [x] CSS in JS 라이브러리(styled-components) 활용 방법을 학습합니다.
// - [x] Firebase 인증, 데이터베이스, 스토리지 API에 대해 살펴봅니다.
// - [x] Firebase 작업을 도와주는 커스텀 훅에 대해 소개하고 사용법을 알아봅니다.
// - [ ] React Router 라이브러리를 사용해 라우팅하는 방법을 학습합니다.
// ---------------------------------------------------------------------------------

// import { StrictMode } from 'react';
import '@/styles/global.scss';
import { createRoot } from 'react-dom/client';
import { AuthUserProvider } from './contexts/AuthUser';
import { GlobalStateProvider } from '@/contexts/GlobalState';
import App from '@/app/App';

createRoot(document.getElementById('root')).render(
  <AuthUserProvider>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </AuthUserProvider>
);
