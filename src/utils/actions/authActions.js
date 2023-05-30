import { getFirebaseApp } from "../firebaseHelper";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { set, child, getDatabase, ref } from 'firebase/database';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const signUp =  (formData) => {
  return async dispatch => {

    const app = getFirebaseApp();
    const auth = getAuth(app);
  
    try {
      const result = await createUserWithEmailAndPassword(auth, formData.mail, formData.pass);
      const { uid, stsTokenManager } = result.user;
      const {accessToken,expirationTime} = stsTokenManager

      const expiryDate = new Date(expirationTime);
  
      const userData = await createUser(formData, uid);
  
      dispatch(authenticate({token:accessToken,userData}));
      saveDataToStorage(accessToken,uid,expiryDate)



    } catch (error) {
      console.log(error)
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
  await set(childRef,userData);
  return userData;
};


const saveDataToStorage = (token,userId,expiryDate) => {
  AsyncStorage.setItem("userData",JSON.stringify({
    token,
    userId,
    expiryDate: expiryDate.toISOString()

  }))
}