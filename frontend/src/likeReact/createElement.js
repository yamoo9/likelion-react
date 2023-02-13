export const createElement = (type, props = {}, ...children) => {
  
  return {
    '$$typeof': Symbol('virtual.dom.element'),
    type,
    props: {
      ...props,
      children
    }
  }
}