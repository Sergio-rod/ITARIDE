import { getFirebaseApp } from "../firebaseHelper";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { set, child, getDatabase, ref } from 'firebase/database';
import { async } from "validate.js";
import {authenticate } from "../../../store/authSlice";

export const signUp =  (formData) => {
  return async dispatch => {

    const app = getFirebaseApp();
    const auth = getAuth(app);
  
    try {
      const result = await createUserWithEmailAndPassword(auth, formData.mail, formData.pass);
      const { uid, stsTokenManager } = result.user;
      const {accessToken} = stsTokenManager
  
      const userData = await createUser(formData, uid);
  
      dispatch(authenticate({token:accessToken,userData}));
    } catch (error) {
      const errorCode = error.code;
      let message = "Something went wrong";
  
      if (errorCode === "auth/email-already-in-use") {
        message = "This mail is already in use";
      }
  
      throw new Error(message);
    }

  }
 
};

const createUser = async (formData, userId) => {
  const userData = {
    userId,
    code: formData.code,
    phoneNumber: formData.phoneNumber,
    campus: formData.campus,
    controlNumber: formData.controlNumber,
    mail: formData.mail,
    signUpDate: new Date().toISOString()
  };

  const dbRef = ref(getDatabase());
  const childRef = child(dbRef, `users/${userId}`);
  return set(childRef, userData).then(() => userData);
};
