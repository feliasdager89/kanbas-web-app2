import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import { modules } from "../../Database";

type Lesson = {
  _id: string;
  name: string;
  description?: string;
  module: string;
};

export type Module = {
  _id: string;
  name: string;
  description?: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
};

type ModuleState = {
  modules: Module[];
};

const initialState: ModuleState = {
  modules: [],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<Module[]>) => {
      state.modules = Array.isArray(action.payload)
        ? action.payload
        : [];
    },

    addModule: (state, action: PayloadAction<Module>) => {
      // Redux Toolkit (Immer) allows direct mutation
      state.modules.push(action.payload);
    },

    deleteModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.filter(
        (m) => m._id !== action.payload
      );
    },

    updateModule: (state, action: PayloadAction<Module>) => {
      state.modules = state.modules.map((m) =>
        m._id === action.payload._id ? action.payload : m
      );
    },

    editModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.map((m) =>
        m._id === action.payload ? { ...m, editing: true } : m
      );
    },
  },
});

export const {
  addModule,
  deleteModule,
  updateModule,
  editModule,
  setModules,
} = modulesSlice.actions;

export default modulesSlice.reducer;

