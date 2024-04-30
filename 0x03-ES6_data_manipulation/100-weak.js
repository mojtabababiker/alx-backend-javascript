export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  if (endPoint.protocol && endPoint.name) {
    if (weakMap.get(endPoint) >= 5) {
      throw new Error('Endpoint load is high');
    }
    const counter = weakMap.get(endPoint) + 1 || 1;
    weakMap.set(endPoint, counter);
  }
}
