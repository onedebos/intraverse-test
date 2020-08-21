import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  login,
  signUp,
  SignUpObj,
  LoginObj,
} from "../../utils/services/service";

import { AppThunk } from "../../index";

export interface UserState {
  loading: boolean;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  errors: string;
  message: string;
}

const initialState: UserState = {
  firstName: "",
  lastName: "",
  password: "",
  email: "",
  loading: false,
  errors: "",
  message: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setFirstName: (state, { payload }: PayloadAction<string>) => {
      state.firstName = payload;
    },
    setLastName: (state, { payload }: PayloadAction<string>) => {
      state.lastName = payload;
    },

    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.firstName = payload;
    },

    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.firstName = payload;
    },
    setMessage: (state, { payload }: PayloadAction<string>) => {
      state.message = payload;
    },
  },
});

export const {
  setLoading,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setErrors,
  setMessage,
} = userSlice.actions;

export default userSlice.reducer;

export const userSelector = (state: { userStore: UserState }) =>
  state.userStore;

export const signUpNewUser = (user: SignUpObj): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await signUp(user);
      dispatch(setMessage("Congrats, successfully signed up!."));
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      dispatch(setErrors(error.message));
      dispatch(setMessage("Sorry, something went wrong while signing you up."));
      dispatch(setLoading(false));
    }
  };
};

export const loginUser = (user: LoginObj): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await login(user);
      dispatch(setMessage("Congrats, successfully signed in!."));
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      dispatch(setErrors(error.message));
      dispatch(setMessage("Sorry, something went wrong while signing you in."));
      dispatch(setLoading(false));
    }
  };
};
