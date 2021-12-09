
let InitialState = {
    users: [
      
    ],

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
                ...state, users: [...state.users,...action.users]
            }
        default: return state;
    }

}

export const followActionCreator = (userId) => {
   return { type: 'FOLLOW', userId }
}
export const unfollowActionCreator = (userId) => {
    return { type: 'UNFOLLOW', userId }
}
export const setUsersActionCreator = (users) => {
    return { type: 'SET_USERS', users }
}
export default UsersCReducer;