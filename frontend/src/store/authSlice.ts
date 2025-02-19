import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface User {
  full_name: string;
  firstName: string;
  lastName: string;
  email: string;
  access_token: string;
}


interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}


export const registerUser = createAsyncThunk<
  User, 
  { email: string; password: string; firstName: string; lastName: string }, 
  { rejectValue: string }
>(
  "auth/register", 
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post<User>("http://localhost:8080/auth/register", userData);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message || "Error");
      }
      return rejectWithValue("Registration failed. Please try again.");
    }
  }
);

const initialState: AuthState = {
  user: null,  
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: string }
>(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post<User>("http://localhost:8080/auth/login", credentials);
      
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("access_token", response.data.access_token);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);



export const logoutUser = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("user");
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //reg
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Registration failed";
      })
      //l.in
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      //l.out
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
