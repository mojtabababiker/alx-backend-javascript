export default function createInt8TypedArray(length, pos, value) {
  if (pos >= length || pos < 0 || value > 127 || value < -128) {
    throw new Error('Position outside range');
  }
  const arrayBuffer = new ArrayBuffer(length);
  const bufferView = new Int8Array(arrayBuffer);
  bufferView[pos] = value;

  return new DataView(arrayBuffer);
}
