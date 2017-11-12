import { debounce as debounceFn } from '..';

/**
 * Use TypedPropertyDescriptor.
 * Overload the function so decorator and function are the same
 * See in Redux.
 */
export function debounce(waitMilliseconds = 50, isImmediate = false) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const source = descriptor.value;
    descriptor.value = debounceFn(source, waitMilliseconds, isImmediate);

    return descriptor;
  };
}

interface Defaults {
  waitMilliseconds: 50;
  isImmediate: false;
}
