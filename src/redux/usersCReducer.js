
let InitialState = {
    users: [
    ],
    pageSize: 5,
<<<<<<< HEAD
    totalUsersCount: 0,
    currentPage: 1
=======
    totalUsersCount: 0
>>>>>>> a9e404b65585935683e7e99a2a6024122b198756

}

const UsersCReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, { id: 6, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsepPDS0TZJ4rwIwPLMQY5C5eknoaDfrpPA&usqp=CAU', followed: true, fullName: 'Katya', location: { city: 'Amursk', country: 'Russia' }, status: 'Hello!' }]
            };
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((ul) => {
                    if (ul.id === action.userId) {
                        return { ...ul, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsepPDS0TZJ4rwIwPLMQY5C5eknoaDfrpPA&usqp=CAU', followed: true }
                    }
                    return ul;
                })
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((ul) => {
                    if (ul.id === action.userId) {
                        return { ...ul, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsepPDS0TZJ4rwIwPLMQY5C5eknoaDfrpPA&usqp=CAU', followed: false }
                    }
                    return ul;
                })

            };
        case 'SET_USERS':
            return {
<<<<<<< HEAD
                ...state, users:action.users
            }

        case 'SET_PAGE':
            return {
                ...state, currentPage:action.currentPage
            }

            case 'SET_TOTALUSERS':
                return{
                    ...state, totalUsersCount:action.totalUsersCount
                }
=======
                ...state, users: [...state.users,...action.users]
            }
>>>>>>> a9e404b65585935683e7e99a2a6024122b198756
        default: return state;
    }

}

export const followActionCreator = (userId) => {
<<<<<<< HEAD
    return { type: 'FOLLOW', userId }
=======
   return { type: 'FOLLOW', userId }
>>>>>>> a9e404b65585935683e7e99a2a6024122b198756
}
export const unfollowActionCreator = (userId) => {
    return { type: 'UNFOLLOW', userId }
}
export const setUsersActionCreator = (users) => {
    return { type: 'SET_USERS', users }
}
export default UsersCReducer;