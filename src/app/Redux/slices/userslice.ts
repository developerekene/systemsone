import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../utils/Types";

const initialState: UserType = {
  firstName: "",
  lastName: "",
  userType: "",
  uniqueId: "",
  agreeToPolicy: false,
  isLoggedIn: true
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Partial<UserType>>) {
      return { ...state, ...action.payload };
    },

    updateStaffInfo(
      state,
      action: PayloadAction<{
        position?: string;
        department?: string;
        employeeId?: string;
        joinDate?: string;
        employmentStatus?: string;
        workLocation?: string;
      }>
    ) {
      return { ...state, ...action.payload };
    },

    updatePerformanceMetrics(
      state,
      action: PayloadAction<{
        performanceScore?: number;
        attendanceRate?: number;
        trainingProgress?: number;
        activeTasks?: number;
      }>
    ) {
      return { ...state, ...action.payload };
    },

    logoutUser() {
      return { ...initialState };
    },
  },
});

export const {
  setUser,
  updateStaffInfo,
  updatePerformanceMetrics,
  logoutUser,
} = userSlice.actions;

export default userSlice.reducer;
