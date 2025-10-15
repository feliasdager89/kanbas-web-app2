import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER ?? "http://localhost:4000";
const BASE = `${REMOTE_SERVER}/api`;

export const findAssignmentsForCourse = async (cid: string) => {
  const { data } = await axios.get(`${BASE}/courses/${cid}/assignments`);
  return data;
};

export const createAssignment = async (cid: string, assignment: any) => {
  const { data } = await axios.post(`${BASE}/courses/${cid}/assignments`, assignment);
  return data;
};

export const updateAssignment = async (assignment: any) => {
  const { data } = await axios.put(`${BASE}/assignments/${assignment._id}`, assignment);
  return data;
};

export const deleteAssignment = async (aid: string) => {
  await axios.delete(`${BASE}/assignments/${aid}`);
  return aid;
};