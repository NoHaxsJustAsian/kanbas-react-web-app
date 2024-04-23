import axios from "axios";
export const BASE_API = process.env.REACT_APP_API_BASEA6;
export const USERS_API = `${BASE_API}/api/users`;

const request = axios.create({ 
  withCredentials: true,
 });

export interface User { _id: string; username: string; password: string; role: string;
firstName: string, lastName: string };

export const signup = async (user: any) => {
  const response = await request.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const signin = async (credentials: User) => {
  const response = await request.post( `${USERS_API}/signin`, credentials );
  return response.data;
};

export const profile = async () => {
  const response = await request.post(`${USERS_API}/profile`);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await request.post(`${USERS_API}`, user);
  return response.data;
};

export const deleteUser = async (user: any) => {
  const response = await request.delete(
    `${USERS_API}/${user._id}`);
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};

export const signout = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};