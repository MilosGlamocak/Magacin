import {create} from 'zustand';
import { getCurrentUser, signIn } from './lib/appwrite';

export const useAuth = create((set) => ({
    credentials: {email: '', password: ''},
    loggedIn: false,
    username: '',
    email: '',
    avatar: '',

    setEmail: (e) => {
        set((state) => ({
            credentials: {...state.credentials, email: e}
        }));
    },
    setPassword: (e) => {
        set((state) => ({
            credentials: {...state.credentials, password: e}
        }))
    },

    /*logIn: async (email, password) => {
        signIn(email, password)
        .then((res) => {
            console.log(res);
            set((state) => ({loggedIn: true}));
            console.log(user)
        })
    },*/

    checkUser: async () => {
        getCurrentUser()
        .then((res) => {
            set((state) => (
                {username: res.username,
                email: res.email,
                loggedIn: true,
                avatar: res.avatar
                }
            ));
<<<<<<< Updated upstream
        });
=======
        }).catch((error) => console.error(error))   
    },

    logOut: async (sessionId) => {
        if (sessionId) deleteSession(sessionId).then (
            set((state) => ({
                username: '',
                email: '',
                avatar: '',
                sessionId: null,
            })),
            console.log(sessionId),
        );    
>>>>>>> Stashed changes
    }
}))

