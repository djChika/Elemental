import { TargetType } from '../types/target';

function getTargetType(target) {
  if (!target || target === null || target === undefined) {
    return TargetType.Empty;
  }

  if (typeof target.type === 'function') {
    return TargetType.Component;
  }

  if (typeof target.type === 'string') {
    return TargetType.HTMLElement;
  }

  return TargetType.HTMLValue;
}

export default getTargetType;
