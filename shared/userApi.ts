import axios from "axios";


const userApiInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_URL
})

const userApi = {
    login: async (id: string) => {
        const response = await userApiInstance.post('/login', {
            id : id,
        })
        return response.data.id;
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