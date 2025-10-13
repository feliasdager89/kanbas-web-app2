import { createSlice } from "@reduxjs/toolkit";
import { assignments as assignmentsData } from "../../Database";

const initialState = {
  assignments: assignmentsData as any[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,

  reducers: {
    addAssignment: (state, { payload }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: payload.title,
        description: payload.description,
        points: payload.points,
        dueDate: payload.dueDate,
        availableFrom: payload.availableFrom,
        availableUntil: payload.availableUntil,
        course: payload.course,
      };
      state.assignments.push(newAssignment);
    },

    upDateAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === payload._id ? payload : a
      ) as any;
    },

    editAssignment: (state, { payload }) => {
      const index = state.assignments.findIndex((a: any) => a._id === payload._id);
      if (index !== -1) {
        state.assignments[index] = payload;
      }
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId) as any[];
    },
  },
});

export const { addAssignment, editAssignment, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
