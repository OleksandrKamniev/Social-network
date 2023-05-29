const SET_USERS_DATA = "SET_USERS_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: true,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUsersData = (id, email, login) => ({
  type: SET_USERS_DATA,
  data: { id, email, login },
});
export const getAuthUsersData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setAuthUsersData(id, login, email));
    }
  });
};
export default authReducer;
