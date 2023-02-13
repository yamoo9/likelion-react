import { VirtualElement } from "./createElement.js";
import { parseVirtualElement } from "./parseVirtualElement.js";

export function render(virtualElement, actualElement) {
  if (!virtualElement || !(virtualElement instanceof VirtualElement)) {
    throw new Error('virtualElement 타입이 적절하지 않습니다.');
  }

  if (!actualElement || actualElement.nodeType !== document.ELEMENT_NODE) {
    throw new TypeError('actualElement 타입은 DOM 요소여야 합니다.');
  }

  if (actualElement.children.length > 1) {
    actualElement.innerHTML = '';
  }

  actualElement.append(parseVirtualElement(virtualElement));
}

