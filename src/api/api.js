import * as axios from 'axios'

//создаем настройки для запросов для переиспользования
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "22479db7-b7b8-42f8-9c53-d72bdb4b8d8f"
    }
});

export const usersAPI = {
    getUsers(currentpage = 1, pageSize = 1) {
        return instance.get(`users?page=${currentpage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    getUserProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getAuthUser(){
        return instance.get(`auth/me`)
    }
}

//вовзращаем сразу data данные из запроса в компоненту, чтобы не передавать лишние данные

