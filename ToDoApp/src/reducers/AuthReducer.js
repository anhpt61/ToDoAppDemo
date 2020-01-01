import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  AUTH_MODE_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  errorEmail: '',
  password: '',
  passwordError: '',
  user: null,
  loading: false,
  isLogin: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case AUTH_MODE_CHANGED:
      return { ...state, isLogin: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload  };
    case LOGIN_USER_FAIL:
      return { ...state, ...INITIAL_STATE, loading: false };
    default:
      return state;
  }
};
