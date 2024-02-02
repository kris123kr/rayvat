import { createSlice, configureStore } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [] },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});
const store = configureStore({
  reducer: {
    users: usersSlice.reducer, 
  },
});
export const { setUsers } = usersSlice.actions;
export default store;
