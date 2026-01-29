import axios from "axios";
axios.defaults.withCredentials = true;
/**
 * Axios instance configured to send credentials (cookies, auth headers) with each request.
 *
 * @remarks     
 * Sets `withCredentials: true` so credentials are included on same-site and cross-site requests.
 * Ensure your API enables credentialed CORS (`Access-Control-Allow-Credentials: true`) and specifies
 * an allowed origin (not `*`).
 *
 *
 * @example
 * ```ts
 * // Fetch the authenticated user's profile
 * const { data } = await axiosWithCredentials.get('/api/me');
 * ```
 *
 * @warning
 * Avoid using this client for third-party APIs that should not receive your site's credentials.
 */
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER || "http://localhost:4000";
export const USERS_API = `${REMOTE_SERVER}/api/users`; 

export const findAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};



export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
  return response.data;
}; 

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
}; 

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
}; 

export const findUsersByRole = async (role: string) => {
  const response = await
    axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};
