interface User {
    name: string,
    color: string
}

const initialState : Array<User> = new Array<User>();

const moviesReducer = (state : MoviesReducerInterface = initialState, action: any) => {
    switch (action.type) {
        case 'SET_POPULAR_MOVIES':
            return action.data;
        default:
            return state;
    }
}
export default moviesReducer;
