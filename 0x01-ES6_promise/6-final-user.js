import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const array = [];
  Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      for (const result of values) {
        array.push({
          status: 'resolved',
          value: result.status,
        });
      }
    }).finally(() => {
      console.log(array);
      return array;
    }).catch((err) => {
      array.push({
        status: 'rejected',
        value: err,
      });
      return array;
    });
}
