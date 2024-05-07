import {create} from 'zustand';
import { deleteSession, getCurrentUser, signIn } from './lib/appwrite';

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
    username: '',
    email: '',
    avatar: '',
    sessionId: null,

    checkUser: async () => {
        getCurrentUser()
        .then((res) => {
            set((state) => (
                {username: res.username,
                email: res.email,
                avatar: res.avatar,
                sessionId: res.$id
                }
            ));
        }).catch((error) => console.log(error))
        
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
    }
}))

