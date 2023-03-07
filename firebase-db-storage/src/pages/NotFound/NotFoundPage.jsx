import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div role="alert">
      <h2>오류 페이지</h2>
      <p>
        이런... 문제가 발생했습니다.
        <Link to="/">홈 페이지</Link>로 이동해 다른 탐색을 시도해보세요.
      </p>
    </div>
  );
}
