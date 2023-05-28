import { getFirebaseApp } from "../firebaseHelper";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const signUp = async (formData) => {

    const app = getFirebaseApp();

    const auth = getAuth(app);



    try {
        const result = await createUserWithEmailAndPassword(auth, formData.mail, formData.pass);
        console.log(result);
    } catch (error) {
        const errorCode = error.code;
        let message = "Something went wrong";

        if(errorCode === "auth/email-already-in-use"){
            message = "This mail is already in use";
        }

        throw new Error(message);
    }
};
