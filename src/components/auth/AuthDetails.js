import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);


    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful')
        }).catch((error) => console.log(error))
    }
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen()
        }
    }, [])
    return <div>
        {authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p>Sign Out</p>}</div>
}

export default AuthDetails