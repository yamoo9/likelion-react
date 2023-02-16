export default function LogIn() {
  return (
    <div data-component="LogIn">
      <h2>로그인 페이지</h2>
      <form>
        <input
          placeholder="user@company.io"
          name="user-email"
          type="email"
          aria-label="사용자 이메일"
        />
        <input
          placeholder="비밀번호 6자리 이상 숫자, 문자 조합"
          name="user-password"
          type="password"
          aria-label="사용자 패스워드"
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
