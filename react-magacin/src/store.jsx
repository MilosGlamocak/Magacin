import {create} from 'zustand';
import { getCurrentUser, signIn } from './lib/appwrite';

export const useCounterStore = create((set) => ({
    count: 0,
    increment: () => {
        set((state) => ({count: state.count + 1}))
    },
    decrement: () => {
        set((state) => ({count: state.count - 1}))
    },
    incrementAsync: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000)).then((res) => set((state) => ({count: state.count + 1})))
    }
}));

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
        });
    }
}))

