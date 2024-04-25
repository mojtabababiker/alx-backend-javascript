export default function uploadPhoto(filename) {
  return new Promise((res, rej) => {
    const err = new Error(`${filename} cannot be processed`);
    rej(err);
  });
}
