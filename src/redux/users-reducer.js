const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
    users: [
        // {
        //     id: 1, photoUrl: 'https://media.self.com/photos/618eb45bc4880cebf08c1a5b/4:3/w_2560%2Cc_limit/1236337133',
        //     fullName: 'John', follow: true, status: "King", location: { city: 'Odesa', country: 'Ukraine' }
        // },
        // {
        //     id: 2, photoUrl: 'https://media.self.com/photos/618eb45bc4880cebf08c1a5b/4:3/w_2560%2Cc_limit/1236337133',
        //     fullName: 'Kate', follow: false, status: "Princess", location: { city: 'New-York', country: 'USA' }
        // },
        // {
        //     id: 3, photoUrl: 'https://media.self.com/photos/618eb45bc4880cebf08c1a5b/4:3/w_2560%2Cc_limit/1236337133',
        //     fullName: 'Jimmy', follow: true, status: "Boss", location: { city: 'Paris', country: 'France' }
        // },
        // {
        //     id: 4, photoUrl: 'https://media.self.com/photos/618eb45bc4880cebf08c1a5b/4:3/w_2560%2Cc_limit/1236337133',
        //     fullName: 'Pete', follow: false, status: "Knight", location: { city: 'London', country: 'UK' }
        // },
    ]
};
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return { ...u, follow: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return { ...u, follow: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }

        default:
            return state;

    }
}


export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;