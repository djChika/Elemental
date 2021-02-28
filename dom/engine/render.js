import getTargetType from '../../tools/getTargetType';
import { TargetType } from '../../types/target';

function render(target, parentElement) {
  const targetType = getTargetType(target);
  switch (targetType) {
    case TargetType.Component: {
      const rootElement = target.type(target.props, target.children);
      const renderedComponent = render(rootElement, parentElement);
      return renderedComponent;
    }
    case TargetType.HTMLElement: {
      const domElement = document.createElement(target.type);
      // TODO: apply attributes from props
      for (let i = 0; i < target.children.length; i++) {
        let child = target.children[i];
        render(child, domElement);
      }
      parentElement.appendChild(domElement);
      return domElement;
    }
    case TargetType.HTMLValue:
    default: {
      const value = document.createTextNode(target || '');
      parentElement.appendChild(value);
      return value;
    }
  }
}

export default render;
