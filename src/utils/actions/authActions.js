import { getFirebaseApp } from "../firebaseHelper";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const signUp = async (formData) => {

    const app = getFirebaseApp();

    const auth = getAuth(app);



    try {
        const result = await createUserWithEmailAndPassword(auth, formData.mail, formData.pass);
        console.log(result);
    } catch (error) {
        console.log("no se puede we");
    }
};
