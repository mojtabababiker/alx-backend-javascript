export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  if (endPoint.protocol && endPoint.name) {
    const counter = weakMap.get(endPoint) || 0;
    if (counter >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endPoint, counter + 1);
  }
}
