import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import authenticationInit from "../Component/Login/Firebase/firebase.init";

authenticationInit();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // signIn using google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setErr(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state changed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    // logout process
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }


    // registration process
    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setErr('Password must be at least 6 character long');
            return;
        }
        else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setErr('Ensure string has two uppercase letters.');
            return;
        }
        createNewUser(email, password);
    }

    // login with email & password
    const handleLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)
            .catch(error => {
                setErr(error.message);
            })
            .finally(setErr(''));
    }

    // get new user
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setErr('');
                verifyEmail();
                setUserName();
            })
            .catch((error) => {
                setErr(error.message);
            });
    }

    // Email Verification 
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
    }

    // update profile 
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => {
            })
    }

    // get name 
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    // get email
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    // get password
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    // reset password 
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }
    return {
        user,
        name,
        isLoading,
        signInUsingGoogle,
        handleNameChange,
        handleEmailChange,
        handleRegistration,
        handlePasswordChange,
        handleLogin,
        handleResetPassword,
        setErr,
        err,
        logOut
    }
}
export default useFirebase;