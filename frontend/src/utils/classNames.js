/**
 * 요소에 클래스 이름 추가 유틸리티
 * @param {HTMLElement} element HTML 요소 노드
 * @param {string} className 클래스 이름
 */
export function addClass(element, className) {
  element.classList.add(className);
}

/**
 * 요소에 클래스 이름 제거 유틸리티
 * @param {HTMLElement} element HTML 요소 노드
 * @param {string} className 클래스 이름
 */
export function removeClass(element, className) {
  element.classList.remove(className);
}
