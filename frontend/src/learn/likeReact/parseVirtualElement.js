export function parseVirtualElement(virtualElement) {
  const element = document.createElement(virtualElement.type);

  const children = virtualElement.props.children;
  delete virtualElement.props.children;

  for (let [prop, value] of Object.entries(virtualElement.props)) {
    if (prop === 'className') { prop = 'class'; }
    element.setAttribute(prop, value);
  }

  if (children.length > 0) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.textContent = child;
      } else {
        element.append(parseVirtualElement(child));
      }
    });
  }

  return element;
}
