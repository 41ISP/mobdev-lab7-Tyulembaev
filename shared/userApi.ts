import axios from "axios";

interface IUser  {
    id : string
}

const userApiInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_URL
})

const userApi = {
    login: async (id: string) => {
        const response = await userApiInstance.post('/login', {
            id : id,
        })
        return response.data;
    },
    getMessage: async (id: string) => {
        const response = await userApiInstance.get(`/messages/${id}`, {
            withCredentials: false,
            params: {
                id: id
            }
        })
        return response
    }
}

export default userApi