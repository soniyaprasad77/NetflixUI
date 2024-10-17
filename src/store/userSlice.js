import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  displayName: "",
  id: "",
  photoURL: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { email, displayName, id, photoURL } = action.payload;

      state.email = email;
      state.displayName = displayName;
      state.id = id;
      state.photoURL = photoURL;
    },

    removeUser: () => {
      return initialState; // Reset to the initial state instead of null
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
