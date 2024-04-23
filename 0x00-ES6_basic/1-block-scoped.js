export default function taskBlock(trueOrFalse) {
  if (trueOrFalse) {
    // eslint-disable-next-line
    task = true;
    // eslint-disable-next-line
    task2 = false;
  }

  // eslint-disable-next-line
  var task = false;
  // eslint-disable-next-line
  var task2 = true;
  return [task, task2];
}
