import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const array = [];
  return signUpUser(firstName, lastName).then((result) => {
    array.push({ status: 'fulfilled', value: result });
    return uploadPhoto(fileName);
  }).then((result) => {
    array.push({ status: 'fulfilled', value: result });
  }).catch((err) => {
    array.push({ status: 'rejected', value: err });
  })
    .finally(() => (array));
}
