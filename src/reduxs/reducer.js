const initState = {
    checkLogin: {
        loggedIn: false
    }
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'admin/checkLogin':
            const login = action.data;

            return {
                checkLogin: { loggedIn: login }
            }
        default:
            return state;
    }
};
export default rootReducer