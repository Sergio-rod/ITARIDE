import { getDatabase, ref,child,get } from "firebase/database"
import { getFirebaseApp } from "../firebaseHelper";

export const getUserData = async (userId)=>{
    try {
        const app = getFirebaseApp();
        const dbRef = ref(getDatabase(app));
        const userRef = child(dbRef, `users/${userId}`);

        const snapshot = await get(userRef);
        console.log("DESDE USER ACTION",snapshot);
        
    } catch (error) {
        console.log(error)
        
    }
}