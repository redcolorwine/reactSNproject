import {createSelector} from 'reselect'

export const getUsersSelector=(state)=>{
    return state.userPageC.users;
}

export const getUsers=createSelector(getUsersSelector,(users)=>{
    return users.filter(u=>true);
})

export const getPageSize=(state)=>{
    return state.userPageC.pageSize;
}

export const getTotalUsersCount=(state)=>{
    return state.userPageC.totalUsersCount
}

export const getCurrentPage=(state)=>{
    return state.userPageC.currentPage
}
export const getFetching=(state)=>{
    return  state.userPageC.isFetching
}
export const getFollowingInProgress=(state)=>{
    return state.userPageC.followingInProgress
}


