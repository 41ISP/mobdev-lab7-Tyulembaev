import AsyncStorage from "@react-native-async-storage/async-storage"
import { create } from "zustand"
import {createJSONStorage, persist} from "zustand/middleware"

interface IUserStore{
    currentUser : string
    setCurrentUser : (id : string) => void
    currentChat : string
    setCurrentChat : (userId : string) => void
}

const useUserStore = create<IUserStore>()(
    persist(
        (set) => ({
            currentUser : '',
            currentChat : '',
            setCurrentUser : (id) => set((state) => ({currentUser : id})),
            setCurrentChat : (userId) => set((state) => ({currentChat : userId}))
        }),
        {name : "userstore", storage:createJSONStorage(()=> AsyncStorage)}
    )
)



export default useUserStore;