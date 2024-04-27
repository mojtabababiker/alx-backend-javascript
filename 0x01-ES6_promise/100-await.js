import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoResult = await uploadPhoto();
    const createUserResult = await createUser();

    return { photo: photoResult, user: createUserResult };
  } catch (error) {
    return { photo: null, user: null };
  }
}
