
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let InitialState = {
    users: [
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

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
                ...state, users: action.users
            }

        case 'SET_PAGE':
            return {
                ...state, currentPage: action.currentPage
            }

        case 'SET_TOTALUSERS':
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }

        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress,action.userId] 
                : state.followingInProgress.filter(id=>id!=action.userId)
            }
        case 'SET_PAGE':
            return {
                ...state, currentPage: action.currentPage
            }

        case 'SET_TOTALUSERS':
            return {
                ...state, totalUsersCount: action.totalUsersCount
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

export const setToggleIsFetching = (isFetching) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    }
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}
export default UsersCReducer;