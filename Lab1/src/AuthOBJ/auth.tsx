import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
    isLogin: boolean;
    aToken: Token;
    rToken: Token;
}

export interface Token {
    isPresent: boolean;
    token: string;
}

const initialState: CounterState = {
    isLogin: false,
    aToken: {
        isPresent: false,
        token: ""
    },
    rToken: {
        isPresent: false,
        token: ""
    }
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<Token>) => {
            state.isLogin = true;
            state.aToken = action.payload; 
        },
    }
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
