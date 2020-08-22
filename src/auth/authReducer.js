import { types } from '../types/types';
const initialState = {
  name: '',
  logged: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      console.log('entro');
      return {
        ...action.payload,
        logged: true,
      };

    case types.LOGOUT:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
