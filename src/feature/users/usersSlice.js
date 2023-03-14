import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Dude' },
  { id: '1', name: 'Neil' },
  { id: '3', name: 'Yuva' },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
