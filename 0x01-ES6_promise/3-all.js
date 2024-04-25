import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let message = '';
  return uploadPhoto()
    .then((response) => {
      message += response.body;
      return createUser();
    })
    .then((response) => {
      message += ` ${response.firstName} ${response.lastName}`;
      console.log(message);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
