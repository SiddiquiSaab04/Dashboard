import axiosInstance from "./AxiosInstance";
import type { LoginPaylaod } from "../components/interface/LoginPaylaod";

export const login = async (payload: LoginPaylaod) => {
  try {
    const response = await axiosInstance.post("/auth/login", payload);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
