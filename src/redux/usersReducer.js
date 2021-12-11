
let InitialState = {
    users: [
        { id: 1, name: 'Sonya', country: 'Russia', message: 'i like sport' },
        { id: 2, name: 'Sveta', country: 'Russia', message: 'i like horses' },
        { id: 3, name: 'Polina', country: 'Russia', message: 'i like music' },
        { id: 4, name: 'Eva', country: 'Russia', message: 'i like swim' },
        { id: 5, name: 'Sasha', country: 'Germany', message: 'i like anime' }
    ],
    butVal: 'follow'
}

const UsersReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            debugger;
            return {
                ...state,
                users: [...state.users, { id: 6, name: 'Katya', country: 'Italy', message: 'Hello!' }]
            };
        case 'FOLLOW':
            debugger;
            return {
                ...state,
                butVal: 'unfollow'
            };
        default: return state;
    }

}

export default UsersReducer;