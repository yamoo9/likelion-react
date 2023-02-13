export class VirtualElement {
  $$typeof = Symbol('virtual.element');
  constructor(type, props = {}, ...children) {
    this.type = type;
    this.props = { ...props, children };
  }
}

export function createElement(type, props, ...children) {
  return new VirtualElement(type, props, ...children);
}