// notificationsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";

const notificationsSlice = createSlice({
    name: "notifications",
    initialState: {
        notifications: [],
        status: "idle",
        error: null,
    },
    reducers: {
        addNotification: (state, action) => {
            state.notifications.push(action.payload);
        },
        setUserNotifications: (state, action) => {
            state.notifications = action.payload;
        },
    },
});

export const fetchUserNotifications = () => async (dispatch) => {
    try {
      const branchCollection = collection(fireDB, "userNotifications");
      const q = query(branchCollection, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const userNotifications = [];
      querySnapshot.forEach((doc) => {
        userNotifications.push({ id: doc.id, ...doc.data() });
      });
      dispatch(setUserNotifications(userNotifications));
    } catch (error) {
      console.error("Error fetching user notifications: ", error);
    }
  };

export const { addNotification, setUserNotifications } = notificationsSlice.actions;
export const selectNotifications = (state) => state.notifications.notifications;
export default notificationsSlice.reducer;
