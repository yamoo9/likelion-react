/* React 컴포넌트 --------------------------------------------------------------- */

// 함수(형) 컴포넌트
function Group() {
  return (
    <div role="group" lang="en">
      Group Element
    </div>
  )
}


/* React DOM 렌더 ------------------------------------------------------------- */

const reactDomRoot = ReactDOM.createRoot(document.getElementById('root'));

reactDomRoot.render(
  // HTML, XML
  <div role="group" lang="en">Group Element</div>
  // React.createElement(Group)
);