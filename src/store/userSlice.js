import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    displayName: "",
    id: "",
    photoURL: "",
  },
  reducers: {
    addUser: (state, action) => {
      const { email, displayName, id, photoURL } = action.payload;
      state.email = email;
      state.displayName = displayName;
      state.id = id;
      state.photoURL = photoURL;
    },

    removeUser: () => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
